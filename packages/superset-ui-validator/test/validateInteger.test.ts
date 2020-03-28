import { validateInteger } from '../src';

describe('validateInteger()', () => {
  it('returns the warning message if invalid', () => {
    expect(validateInteger(10.1)).toBeTruthy();
    expect(validateInteger(undefined)).toBeTruthy();
    expect(validateInteger(null)).toBeTruthy();
    expect(validateInteger('')).toBeTruthy();
  });
  it('returns false if the input is valid', () => {
    expect(validateInteger(10)).toBeFalsy();
    expect(validateInteger('10')).toBeFalsy();
  });
});
