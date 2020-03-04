(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{1039:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return reactify}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function reactify(renderFn,callbacks){class ReactifiedComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props),_defineProperty(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==callbacks?void 0:callbacks.componentWillUnmount)&&callbacks.componentWillUnmount.bind(this)()}setContainerRef(ref){this.container=ref}execute(){this.container&&renderFn(this.container,this.props)}render(){const{id:id,className:className}=this.props;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:this.setContainerRef,id:id,className:className})}}_defineProperty(ReactifiedComponent,"propTypes",{id:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string});const ReactifiedClass=ReactifiedComponent;return renderFn.displayName&&(ReactifiedClass.displayName=renderFn.displayName),renderFn.propTypes&&(ReactifiedClass.propTypes=_extends({},ReactifiedClass.propTypes,{},renderFn.propTypes)),renderFn.defaultProps&&(ReactifiedClass.defaultProps=renderFn.defaultProps),ReactifiedComponent}},1066:function(module,exports,__webpack_require__){var api=__webpack_require__(172),content=__webpack_require__(1067);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1067:function(module,exports,__webpack_require__){(exports=__webpack_require__(173)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-sunburst text {\n  text-rendering: optimizeLegibility;\n}\n.superset-legacy-chart-sunburst path {\n  stroke: #ddd;\n  stroke-width: 0.5px;\n}\n.superset-legacy-chart-sunburst .center-label {\n  text-anchor: middle;\n  fill: #333;\n  pointer-events: none;\n}\n.superset-legacy-chart-sunburst .path-abs-percent {\n  font-size: 3em;\n  font-weight: 700;\n}\n.superset-legacy-chart-sunburst .path-cond-percent {\n  font-size: 2em;\n}\n.superset-legacy-chart-sunburst .path-metrics {\n  color: #777;\n}\n.superset-legacy-chart-sunburst .path-ratio {\n  color: #777;\n}\n\n.superset-legacy-chart-sunburst .breadcrumbs text {\n  font-weight: 600;\n  font-size: 1.2em;\n  text-anchor: middle;\n  fill: #333;\n}\n\n/* dashboard specific */\n/*\n.dashboard .superset-legacy-chart-sunburst text {\n  font-size: 1em;\n}\n.dashboard .superset-legacy-chart-sunburst .path-abs-percent {\n  font-size: 2em;\n  font-weight: 700;\n}\n.dashboard .superset-legacy-chart-sunburst .path-cond-percent {\n  font-size: 1.5em;\n}\n.dashboard .superset-legacy-chart-sunburst .path-metrics {\n  font-size: 1em;\n}\n.dashboard .superset-legacy-chart-sunburst .path-ratio {\n  font-size: 1em;\n}\n*/\n',""]),module.exports=exports},1111:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var reactify=__webpack_require__(1039),d3=__webpack_require__(1024),d3_default=__webpack_require__.n(d3),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__(320),NumberFormatterRegistrySingleton=__webpack_require__(985),NumberFormats=__webpack_require__(103);function wrapSvgText(text,width,adjustedY){text.each((function each(){const d3Text=d3_default.a.select(this),words=d3Text.text().split(/\s+/);let line=[],lineNumber=0;const x=d3Text.attr("x"),y=d3Text.attr("y"),dy=parseFloat(d3Text.attr("dy"));let tspan=d3Text.text(null).append("tspan").attr("x",x).attr("y",y).attr("dy",dy+"em"),didWrap=!1;words.forEach(word=>{line.push(word),tspan.text(line.join(" ")),tspan.node().getComputedTextLength()>width&&(line.pop(),tspan.text(line.join(" ")),line=[word],tspan=d3Text.append("tspan").attr("x",x).attr("y",y).attr("dy",1*++lineNumber+dy+"em").text(word),didWrap=!0)}),didWrap||void 0===adjustedY||tspan.attr("y",adjustedY)}))}__webpack_require__(1066);const propTypes={data:prop_types_default.a.arrayOf(prop_types_default.a.array),width:prop_types_default.a.number,height:prop_types_default.a.number,colorScheme:prop_types_default.a.string,numberFormat:prop_types_default.a.string,metrics:prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.object]))};function metricLabel(metric){return"string"==typeof metric||metric instanceof String?metric:metric.label}function Sunburst_Sunburst(element,props){const container=d3_default.a.select(element);container.classed("superset-legacy-chart-sunburst",!0);const{data:data,width:width,height:height,colorScheme:colorScheme,metrics:metrics,numberFormat:numberFormat}=props,margin_top=10,margin_left=5,containerWidth=width,containerHeight=height,breadcrumbHeight=.085*containerHeight,visWidth=containerWidth-margin_left-5,visHeight=containerHeight-margin_top-10-breadcrumbHeight,radius=Math.min(visWidth,visHeight)/2;let maxBreadcrumbs,breadcrumbDims,totalSize,colorScale,breadcrumbs,vis,arcs,gMiddleText,colorByCategory=!0;const colorFn=esm.CategoricalColorNamespace.getScale(colorScheme),partition=d3_default.a.layout.partition().size([2*Math.PI,radius*radius]).value(d=>d.m1),arc=d3_default.a.svg.arc().startAngle(d=>d.x).endAngle(d=>d.x+d.dx).innerRadius(d=>Math.sqrt(d.y)).outerRadius(d=>Math.sqrt(d.y+d.dy)),formatNum=Object(NumberFormatterRegistrySingleton.c)(numberFormat||NumberFormats.a.SI_3_DIGIT),formatPerc=Object(NumberFormatterRegistrySingleton.c)(NumberFormats.a.PERCENT_3_POINT);container.select("svg").remove();const svg=container.append("svg:svg").attr("width",containerWidth).attr("height",containerHeight);function breadcrumbPoints(d,i){const points=[];return points.push("0,0"),points.push(breadcrumbDims.width+",0"),points.push(breadcrumbDims.width+breadcrumbDims.tipTailWidth+","+breadcrumbDims.height/2),points.push(breadcrumbDims.width+","+breadcrumbDims.height),points.push("0,"+breadcrumbDims.height),i>0&&points.push(breadcrumbDims.tipTailWidth+","+breadcrumbDims.height/2),points.join(" ")}function mouseenter(d){const sequenceArray=function getAncestors(node){const path=[];let current=node;for(;current.parent;)path.unshift(current),current=current.parent;return path}(d),parentOfD=sequenceArray[sequenceArray.length-2]||null,absolutePercentage=(d.m1/totalSize).toPrecision(3),conditionalPercentage=parentOfD?(d.m1/parentOfD.m1).toPrecision(3):null,absolutePercString=formatPerc(absolutePercentage),conditionalPercString=parentOfD?formatPerc(conditionalPercentage):"",yOffsets=["-25","7","35","60"];let offsetIndex=0;const metricsMatch=Math.abs(d.m1-d.m2)<1e-5;gMiddleText.selectAll("*").remove(),gMiddleText.append("text").attr("class","path-abs-percent").attr("y",yOffsets[offsetIndex++]).text(absolutePercString+" of total"),conditionalPercString&&gMiddleText.append("text").attr("class","path-cond-percent").attr("y",yOffsets[offsetIndex++]).text(conditionalPercString+" of parent"),gMiddleText.append("text").attr("class","path-metrics").attr("y",yOffsets[offsetIndex++]).text(metricLabel(metrics[0])+": "+formatNum(d.m1)+(metricsMatch?"":", "+metricLabel(metrics[1])+": "+formatNum(d.m2))),gMiddleText.append("text").attr("class","path-ratio").attr("y",yOffsets[offsetIndex++]).text(metricsMatch?"":metricLabel(metrics[1])+"/"+metricLabel(metrics[0])+": "+formatPerc(d.m2/d.m1)),arcs.selectAll("path").style("stroke-width",null).style("stroke",null).style("opacity",.3),arcs.selectAll("path").filter(node=>sequenceArray.includes(node)).style("opacity",1).style("stroke","#aaa"),function updateBreadcrumbs(sequenceArray,percentageString){const g=breadcrumbs.selectAll("g").data(sequenceArray,d=>d.name+d.depth),entering=g.enter().append("svg:g");entering.append("svg:polygon").attr("points",breadcrumbPoints).style("fill",d=>colorByCategory?colorFn(d.name):colorScale(d.m2/d.m1)),entering.append("svg:text").attr("x",(breadcrumbDims.width+breadcrumbDims.tipTailWidth)/2).attr("y",breadcrumbDims.height/4).attr("dy","0.85em").style("fill",d=>d3_default.a.hsl(colorByCategory?colorFn(d.name):colorScale(d.m2/d.m1)).l<.5?"white":"black").attr("class","step-label").text(d=>d.name.replace(/_/g," ")).call(wrapSvgText,breadcrumbDims.width,breadcrumbDims.height/2),g.attr("transform",(d,i)=>"translate("+i*(breadcrumbDims.width+breadcrumbDims.spacing)+", 0)"),g.exit().remove(),breadcrumbs.select(".end-label").attr("x",(sequenceArray.length+.5)*(breadcrumbDims.width+breadcrumbDims.spacing)).attr("y",breadcrumbDims.height/2).attr("dy","0.35em").text(percentageString),breadcrumbs.style("visibility",null)}(sequenceArray,absolutePercString)}function mouseleave(){breadcrumbs.style("visibility","hidden"),gMiddleText.selectAll("*").remove(),arcs.selectAll("path").on("mouseenter",null),arcs.selectAll("path").transition().duration(200).style("opacity",1).style("stroke",null).style("stroke-width",null).each("end",(function end(){d3_default.a.select(this).on("mouseenter",mouseenter)}))}!function createBreadcrumbs(firstRowData){maxBreadcrumbs=firstRowData.length-2+1,breadcrumbDims={width:visWidth/maxBreadcrumbs,height:.8*breadcrumbHeight,spacing:3,tipTailWidth:10},breadcrumbs=svg.append("svg:g").attr("class","breadcrumbs").attr("transform","translate("+margin_left+","+margin_top+")"),breadcrumbs.append("svg:text").attr("class","end-label")}(data[0]),function createVisualization(rows){const root=function buildHierarchy(rows){const root={name:"root",children:[]};return rows.forEach(row=>{const m1=Number(row[row.length-2]),m2=Number(row[row.length-1]),levels=row.slice(0,-2);if(Number.isNaN(m1))return;let currentNode=root;for(let level=0;level<levels.length;level++){const children=currentNode.children||[],nodeName=levels[level].toString();let childNode;level>=levels.length-1||0===levels[level+1]?0!==nodeName&&(childNode={name:nodeName,m1:m1,m2:m2},children.push(childNode)):(childNode=children.find(child=>child.name===nodeName&&child.level===level),childNode||(childNode={name:nodeName,children:[],level:level},children.push(childNode)),currentNode=childNode)}}),function recurse(node){if(node.children){let sums,m1=0,m2=0;for(let i=0;i<node.children.length;i++)sums=recurse(node.children[i]),m1+=sums[0],m2+=sums[1];node.m1=m1,node.m2=m2}return[node.m1,node.m2]}(root),root}(rows);vis=svg.append("svg:g").attr("class","sunburst-vis").attr("transform","translate("+(margin_left+visWidth/2)+","+(margin_top+breadcrumbHeight+visHeight/2)+")").on("mouseleave",mouseleave),arcs=vis.append("svg:g").attr("id","arcs"),gMiddleText=vis.append("svg:g").attr("class","center-label"),arcs.append("svg:circle").attr("r",radius).style("opacity",0);const nodes=partition.nodes(root).filter(d=>d.dx>.005);let ext;metrics[0]!==metrics[1]&&metrics[1]&&(colorByCategory=!1,ext=d3_default.a.extent(nodes,d=>d.m2/d.m1),colorScale=d3_default.a.scale.linear().domain([ext[0],ext[0]+(ext[1]-ext[0])/2,ext[1]]).range(["#00D1C1","white","#FFB400"])),arcs.selectAll("path").data(nodes).enter().append("svg:path").attr("display",d=>d.depth?null:"none").attr("d",arc).attr("fill-rule","evenodd").style("fill",d=>colorByCategory?colorFn(d.name):colorScale(d.m2/d.m1)).style("opacity",1).on("mouseenter",mouseenter),totalSize=root.value}(data)}Sunburst_Sunburst.displayName="Sunburst",Sunburst_Sunburst.propTypes=propTypes;var esm_Sunburst=Sunburst_Sunburst;__webpack_exports__.default=Object(reactify.a)(esm_Sunburst)}}]);
//# sourceMappingURL=5.c56e26d619943c74afac.bundle.js.map