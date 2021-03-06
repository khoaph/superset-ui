import callApi from './callApi';
import {
  ClientConfig,
  ClientTimeout,
  Credentials,
  CsrfPromise,
  CsrfToken,
  Headers,
  Host,
  Mode,
  Protocol,
  RequestConfig,
  SupersetClientResponse,
} from './types';

export default class SupersetClientClass {
  credentials: Credentials;
  csrfToken?: CsrfToken;
  csrfPromise?: CsrfPromise;
  protocol: Protocol;
  host: Host;
  headers: Headers;
  mode: Mode;
  timeout: ClientTimeout;

  constructor({
    protocol = 'http:',
    host = 'localhost',
    headers = {},
    mode = 'same-origin',
    timeout,
    credentials = undefined,
    csrfToken = undefined,
  }: ClientConfig = {}) {
    this.headers = { ...headers };
    this.host = host;
    this.mode = mode;
    this.timeout = timeout;
    this.protocol = protocol;
    this.credentials = credentials;
    this.csrfToken = csrfToken;
    this.csrfPromise = undefined;

    if (typeof this.csrfToken === 'string') {
      this.headers = { ...this.headers, 'X-CSRFToken': this.csrfToken };
      this.csrfPromise = Promise.resolve(this.csrfToken);
    }
  }

  init(force: boolean = false): CsrfPromise {
    if (this.isAuthenticated() && !force) {
      return this.csrfPromise as CsrfPromise;
    }

    return this.getCSRFToken();
  }

  isAuthenticated(): boolean {
    // if CSRF protection is disabled in the Superset app, the token may be an empty string
    return this.csrfToken !== null && this.csrfToken !== undefined;
  }

  async get(requestConfig: RequestConfig): Promise<SupersetClientResponse> {
    return this.request({ ...requestConfig, method: 'GET' });
  }

  async delete(requestConfig: RequestConfig): Promise<SupersetClientResponse> {
    return this.request({ ...requestConfig, method: 'DELETE' });
  }

  async put(requestConfig: RequestConfig): Promise<SupersetClientResponse> {
    return this.request({ ...requestConfig, method: 'PUT' });
  }

  async post(requestConfig: RequestConfig): Promise<SupersetClientResponse> {
    return this.request({ ...requestConfig, method: 'POST' });
  }

  async request({
    body,
    credentials,
    endpoint,
    headers,
    host,
    method,
    mode,
    parseMethod,
    postPayload,
    signal,
    stringify,
    timeout,
    url,
  }: RequestConfig): Promise<SupersetClientResponse> {
    return this.ensureAuth().then(() =>
      callApi({
        body,
        credentials: credentials ?? this.credentials,
        headers: { ...this.headers, ...headers },
        method,
        mode: mode ?? this.mode,
        parseMethod,
        postPayload,
        signal,
        stringify,
        timeout: timeout ?? this.timeout,
        url: this.getUrl({ endpoint, host, url }),
      }),
    );
  }

  ensureAuth(): CsrfPromise {
    return (
      this.csrfPromise ??
      Promise.reject({
        error: `SupersetClient has no CSRF token, ensure it is initialized or
        try logging into the Superset instance at ${this.getUrl({
          endpoint: '/login',
        })}`,
      })
    );
  }

  async getCSRFToken(): CsrfPromise {
    this.csrfToken = undefined;

    // If we can request this resource successfully, it means that the user has
    // authenticated. If not we throw an error prompting to authenticate.
    this.csrfPromise = callApi({
      credentials: this.credentials,
      headers: {
        ...this.headers,
      },
      method: 'GET',
      mode: this.mode,
      timeout: this.timeout,
      url: this.getUrl({ endpoint: 'superset/csrf_token/' }),
    }).then(response => {
      if (typeof response.json === 'object') {
        this.csrfToken = response.json.csrf_token;
        if (typeof this.csrfToken === 'string') {
          this.headers = { ...this.headers, 'X-CSRFToken': this.csrfToken };
        }
      }

      if (!this.isAuthenticated()) {
        return Promise.reject({ error: 'Failed to fetch CSRF token' });
      }

      return this.csrfToken;
    });

    return this.csrfPromise;
  }

  getUrl({
    host: inputHost,
    endpoint = '',
    url,
  }: {
    endpoint?: string;
    host?: Host;
    url?: string;
  } = {}) {
    if (typeof url === 'string') return url;

    const host = inputHost ?? this.host;
    const cleanHost = host.slice(-1) === '/' ? host.slice(0, -1) : host; // no backslash

    return `${this.protocol}//${cleanHost}/${endpoint[0] === '/' ? endpoint.slice(1) : endpoint}`;
  }
}
