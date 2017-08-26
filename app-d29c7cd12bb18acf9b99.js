webpackJsonp([0],[,,,,,,function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.footer={template:n(18)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.header={template:n(19)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.main={template:n(20)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.podsModule=void 0;var o=n(0),i=r(o),a=n(2),s=r(a);n(45),n(46);var u=n(34),l=n(32),c=n(31),d=t.podsModule="pods";i.default.module(d,[u.resourcesModule,s.default,"dynamicLayout"]).component("pods",l.pods).component("aestheticWell",c.aestheticWell)},function(e,t,n){"use strict";function r(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",component:"app"})}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},,,,,,,function(e,t){e.exports='<footer class="footer">\n </footer>\n'},function(e,t,n){e.exports='<header class="header">\n  <p class="header-title">\n    <a href="#" target="_blank" rel="noopener noreferrer">\n      <img src="'+n(48)+'" alt="Viz Explorer" title="Viz Explorer" />\n    </a>\n  </p>\n  <p class="header-sub-title">\n    Dashboard Assignment\n  </p>\n</header>\n'},function(e,t){e.exports='<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    <pods></pods>\n  </main>\n  <fountain-footer></fountain-footer>\n</div>\n'},function(e,t){e.exports='<div class="fluid-container">\n  <div class="row">\n    <div class="col-sm-12 col-md-2">\n    <div class="mp-1 clearfix">\n       <button class="btn btn-default col-sm-12" \n       type="button"\n       ng-click="$ctrl.addPod()">Add Process</button>\n     </div>\n     <div uib-alert\n     dismiss-on-timeout="800"\n     ng-repeat="alert in $ctrl.alerts" ng-class="[\'alert-\' + (alert.type || \'warning\'), \'my-1\']"\n     close="$ctrl.removeAlert(alert.id)">{{alert.msg}}</div>\n   </div>\n   <div class="col-sm-12 col-md-10">\n    <div class="pods-container fluid-container">\n      <div class="row" dynamic-layout rankers="[[\'rank\': \'dsc\']]">\n\n        <pod-resources dynamic-layout-item class="" ng-repeat="pod in $ctrl.activePods" \n        resources="pod.resources"\n        close="$ctrl.removePod" rank="5"></pod-resources>\n\n      </div>\n    </div>  \n  </div>\n</div>\n</div>\n\n'},function(e,t){e.exports='<div class="resource">\n  \n  <h3 ng-if="$ctrl.title" class="resource-title">{{$ctrl.title}}</h3>\n  <div class="resource-value" ng-transclude></div>\n  \n</div>\n'},function(e,t){e.exports='<div class="resources-container">\n <div class="panel panel-default">\n  <div class="panel-heading panel-heading-fd clearfix">\n    <span class="panel-title panel-title-fd">Process <span>{{$ctrl.resources.id}}</span></span>\n    <div class="btn-group pull-right">\n    <button type="button" class="close resources-close" \n      aria-label="Close"\n      ng-click="$ctrl.closePod()"><span aria-hidden="true">&times;</span></button>\n    </div>\n  </div>\n  <div class="panel-body panel-body-fd container-fluid">\n\n    <div class="row no-gutter">\n      <div class="col-xs-3 resources">\n\n        <pod-resource title="CPU %" class="resource-inverse pod-resource-divider-last" >\n          <cpu-value value="$ctrl.resources.cpu"></cpu-value>\n        </pod-resource>\n      </div>\n      <div class="col-xs-9 resources">   \n        <graph-value value="$ctrl.resources.cpu"></graph-value>\n      </div>\n    </div>  \n\n\n    <div class="row no-gutter">\n      <div class="col-xs-3 resources">\n        <pod-resource title="Status" class="pod-resource-divider">\n          <status-value value="$ctrl.resources.status"></status-value>\n        </pod-resource>\n      </div>\n\n      <div class=" col-xs-9 resources">\n\n        <pod-resource title="Instances" class="pod-resource-divider">\n          <instances-value value="$ctrl.resources.instances"></instances-value>\n        </pod-resource>\n        <pod-resource title="Memory MB" class=" pod-resource-divider">\n          <memory-value value="$ctrl.resources.memory"></memory-value>\n        </pod-resource>\n        <pod-resource title="Up Time" class=" pod-resource-divider flex-6">\n          <uptime-value value="$ctrl.resources.upTime"></uptime-value>\n        </pod-resource>\n        <pod-resource title="Restarts" class="pod-resource-divider-last">\n          <restart-value value="$ctrl.resources.restarts" id="$ctrl.id"></restart-value>\n        </pod-resource>\n\n\n      </div>\n    </div>\n  </div>\n</div> \n</div>'},function(e,t){e.exports='<div class="resource-value-cpu">\n  {{$ctrl.value}}\n</div>\n'},function(e,t){e.exports='<div class="resource-value-graph">\n  <nvd3 options="$ctrl.chartOptions" data="$ctrl.data"></nvd3>\n</div>\n'},function(e,t){e.exports='<div class="resource-value-instances">\n  {{$ctrl.value}}\n</div>\n'},function(e,t){e.exports='<div class="resource-value-memory">\n  <nvd3 options="$ctrl.chartOptions" data="$ctrl.data"></nvd3>\n</div>\n'},function(e,t){e.exports='<div class="resource-value-restarts">\n  <span class="flex-3"><span>{{$ctrl.value.length}}</span></span>\n  \n    <a href="#" \n    ng-if="$ctrl.hasRestarts()"\n    uib-tooltip-html="\'{{$ctrl.popup}}\'"\n    tooltip-placement="bottom"\n    tooltip-trigger="\'click\'"\n    ><span class="glyphicon glyphicon-triangle-bottom"></span></a>\n  \n</div>\n'},function(e,t){e.exports="<div ng-class=\"['resource-value-status', $ctrl.style ]\">\n\t{{$ctrl.value}}\n</div>\n"},function(e,t){e.exports="<div class=\"resource-value-uptime\">\n  {{$ctrl.value | secondsToTime | date:'HH:mm:ss'}}\n</div>\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.aestheticWell={template:'<div class="well pod-wells"></div>',bindings:{rank:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n,o){"ngInject";var i=this;r(this,e),t.get("app/pods/pods.json").then(function(e){var t=e.data;i.activePods=t.slice(0,2),i.availablePods=t.slice(2)}),this.alerts=[],this.interval=n,this.timeInterval=4e3,this.timer=null,this.filter=o,this.initDataWorker()}return e.$inject=["$http","$interval","$filter"],o(e,[{key:"removePod",value:function(e){var t=this;this.activePods=this.activePods.filter(function(n){return n.resources.id===e&&t.availablePods.push(Object.assign({},n)),n.resources.id!==e})}},{key:"addPod",value:function(){if(this.isAvailablePodsEmpty()){var e={id:this.alerts.length,msg:"Sorry, no more pods available to add."};return void this.alerts.push(e)}this.activePods.unshift(this.availablePods.shift())}},{key:"isAvailablePodsEmpty",value:function(){return!this.availablePods.length}},{key:"removeAlert",value:function(e){this.alerts=this.alerts.filter(function(t){return t.id!==e})}},{key:"getNewMemoryValue",value:function(e){var t=Math.random()*(e.capacity-1)+1;return t=this.filter("number")(t,0),t=parseInt(t,10),Object.assign({},e,{usage:t})}},{key:"dataWorkOnPod",value:function(e){var t=e.resources,n=this.filter("number")(99*Math.random()+1,0),r=this.getNewMemoryValue(t.memory),o=t.upTime+this.timeInterval/1e3;return Object.assign({},t,{cpu:n,upTime:o,memory:r})}},{key:"initDataWorker",value:function(){var e=this;this.timer=this.interval(function(){e.activePods.forEach(function(t){t.resources=e.dataWorkOnPod(t)})},this.timeInterval)}}]),e}();t.pods={template:n(21),controller:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.secondsToTime=function(){return function(e){return new Date(1970,0,1).setSeconds(e)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.resourcesModule=void 0;var o=n(0),i=r(o),a=n(3),s=r(a);n(5);var u=n(4),l=r(u),c=n(35),d=n(36),p=n(42),f=n(39),v=n(40),m=n(43),h=n(41),y=n(37),g=n(38),b=n(33),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(b),P=t.resourcesModule="resources";i.default.module(P,[s.default,"ui.bootstrap",l.default]).component("podResource",c.resource).component("podResources",d.resources).component("statusValue",p.status).component("instancesValue",f.instances).component("memoryValue",v.memoryValue).component("uptimeValue",m.uptimeValue).component("restartValue",h.restartValue).component("cpuValue",y.cpuValue).component("graphValue",g.graphValue).filter("secondsToTime",[A.secondsToTime])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.resource={template:n(22),bindings:{title:"@"},transclude:!0}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"closePod",value:function(){this.parentCtrl.removePod(this.resources.id)}}]),e}();t.resources={template:n(23),bindings:{resources:"<",close:"&",rank:"<"},controller:i,require:{parentCtrl:"^pods"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.cpuValue={template:n(24),bindings:{value:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.x=0}return o(e,[{key:"$onInit",value:function(){this.data=[{key:"cpu",values:[{x:this.x,y:this.value}],color:"#056ba6",area:!0}],this.chartOptions={chart:{type:"lineChart",height:150,margin:{top:0,right:0,bottom:0,left:0},x:function(e){return e.x},y:function(e){return e.y},showLabels:!1,showLegend:!1,labelType:"percent",tooltip:{enabled:!1}}}}},{key:"$onChanges",value:function(e){this.data&&e.value&&(this.data[0].values.push({x:this.x,y:e.value.currentValue}),this.data[0].values.length>20&&this.data[0].values.shift(),this.x++)}}]),e}();t.graphValue={template:n(25),bindings:{value:"<"},controller:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.instances={template:n(26),bindings:{value:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"$onInit",value:function(){this.data=[{key:"usage",y:this.value.usage/this.value.capacity,color:"#056ba6"},{key:"capacity",y:(this.value.capacity-this.value.usage)/this.value.capacity,color:"white"}],this.chartOptions={chart:{type:"pieChart",height:120,width:100,margin:{top:10,right:10,bottom:10,left:10},donut:!0,x:function(e){return e.key},y:function(e){return e.y},showLabels:!1,showLegend:!1,labelType:"percent",donutRatio:.7,pie:{startAngle:function(e){return e.startAngle},endAngle:function(e){return e.endAngle},title:!0},duration:500,title:this.value.usage,tooltip:{enabled:!1}}}}},{key:"getNewValue",value:function(e){return e.usage/e.capacity}},{key:"$onChanges",value:function(e){if(this.data&&e.value){var t=e.value.currentValue,n=this.getNewValue(t),r=t.usage;this.data[0].y=n,this.chartOptions.chart.title=r}}}]),e}();t.memoryValue={template:n(27),bindings:{value:"<"},controller:i}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){"ngInject";r(this,e),this.sanitize=t}return e.$inject=["$sanitize"],o(e,[{key:"$onInit",value:function(){var e=this,t=this.value.map(function(t){return"<li>"+e.sanitize(t)+"</li>"});this.popup=t.join("")}},{key:"hasRestarts",value:function(){return this.value.length}}]),e}();t.restartValue={template:n(28),bindings:{value:"<",id:"<"},controller:i}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"$onInit",value:function(){this.style=this.isOn()?"status-on":"status-off"}},{key:"isOn",value:function(){return"On"===this.value}}]),e}();t.status={template:n(29),bindings:{value:"<"},controller:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uptimeValue={template:n(30),bindings:{value:"<"}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=n(10);n(1);var s=n(11),u=r(s),l=n(9),c=n(8),d=n(7);n(6),i.default.module("app",[a.podsModule,"ui.router"]).config(u.default).component("app",l.main).component("fountainHeader",c.header).component("fountainFooter",d.footer)},function(e,t,n){"use strict";!function(){angular.module("dynamicLayout",["ngAnimate"])}(),function(){function e(e,t,n){function r(r,o){function i(e){c.push(e),s()}function a(e){c.splice(c.indexOf(e),1),s()}function s(){t.cancel(u),u=t(function(){c.sort(function(e,t){return e.$index<t.$index?-1:e.$index>t.$index?1:0});var e=c[c.length-1];n.layout(o,c),o[0].style.height=e.pos.y+e.dimensions.height+"px"})}var u,l=this,c=[];l.subscribe=i,l.unsubscribe=a,l.layout=s,angular.element(e).on("resize",s),r.$on("$destroy",function(){angular.element(e).off("resize",s)})}return r.$inject=["$scope","$element"],{restrict:"A",controller:r}}angular.module("dynamicLayout").directive("dynamicLayout",e),e.$inject=["$window","$timeout","PositionService"]}(),function(){function e(){function e(e,t,n,r){t.on("load error",function(){r.layout()})}return{restrict:"A",require:"^dynamicLayout",link:e}}angular.module("dynamicLayout").directive("layoutOnLoad",e)}(),function(){function e(){function e(e,r){angular.forEach(r,function(e){e.calculateDimensions()});var o=t(r);return angular.forEach(r,function(e){e.dimensions.columnSpan=Math.ceil(e.dimensions.width/o)}),n(e[0].offsetWidth,o,r)}function t(e){var t;return angular.forEach(e,function(e){(!t||e.dimensions.width<t)&&(t=e.dimensions.width)}),t}function n(e,t,n){var a=r(e,t);angular.forEach(n,function(e){var n,r=o(a),s=i(e,r,t);for(n in s.columns)a[s.columns[n]].push(e);e.pos.x=s.position.x,e.pos.y=s.position.y})}function r(e,t){var n,r=Math.floor(e/t),o=[];for(n=0;n<r;++n)o.push([]);return o}function o(e){var t,n=[];for(t in e){var r=0;if(e[t].length){var o=e[t][e[t].length-1];r=o.pos.y+o.dimensions.height}n.push(r)}return n}function i(e,t,n){if(e.dimensions.columnSpan>t.length)throw"Item too large";var r,o=0,i=0;for(r=0;r<=t.length-e.dimensions.columnSpan;++r){var a=r,s=r+e.dimensions.columnSpan,u=Math.max.apply(Math,t.slice(a,s));(0===r||u<i)&&(i=u,o=r)}var l=[];for(r=o;r<o+e.dimensions.columnSpan;++r)l.push(r);return{columns:l,position:{x:l[0]*n,y:i}}}return{layout:e}}angular.module("dynamicLayout").factory("PositionService",e)}()},function(e,t,n){"use strict";!function(){function e(e,t){function n(n,r,o,i){function a(){var t,o,i=r[0].getBoundingClientRect(),a=e.getComputedStyle(r[0]);i.width?(t=i.width,o=i.height):(t=i.right-i.left,o=i.top-i.bottom),n.dimensions.width=t+parseFloat(a.marginLeft)+parseFloat(a.marginRight),n.dimensions.height=o+parseFloat(a.marginTop)+parseFloat(a.marginBottom)}function s(e,n){u&&t.cancel(u),u=t.addClass(r,"move-items-animation",{from:{position:"absolute",left:n.x+"px",top:n.y+"px"},to:{left:e.x+"px",top:e.y+"px"}}).then(function(){r.removeClass("move-items-animation")})}var u;n.dimensions={columnSpan:0,width:0,height:0},n.pos={x:r[0].offsetLeft,y:r[0].offsetTop},n.calculateDimensions=a,i.subscribe(n),n.$watch("$index",function(e,t){e!==t&&i.layout()}),n.$watchCollection("pos",function(e,t){s(e,t)}),n.$on("$destroy",function(){i.unsubscribe(n)})}return{restrict:"A",require:"^dynamicLayout",link:n}}e.$inject=["$window","$animate"],angular.module("dynamicLayout").directive("dynamicLayoutItem",e)}()},,function(e,t){e.exports="data:image/png;base64,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"}],[44]);