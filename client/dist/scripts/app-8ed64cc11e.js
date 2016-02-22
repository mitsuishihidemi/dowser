!function(){"use strict";angular.module("dowser",["ngAnimate","ui.router","ui.ace","ngMaterial","toastr","ngStorage"])}(),function(){"use strict";function e(){function e(e){return{id:"ValueAxis-"+e,axisThickness:0,gridCount:0,gridThickness:0,ignoreAxisWidth:!0,labelsEnabled:!1}}return e}angular.module("dowser").factory("AmChartValueAxe",e)}(),function(){"use strict";function e(e){function t(){return{type:"serial",colors:e.linesColorPallet,creditsPosition:"bottom-right",categoryField:"date",dataDateFormat:"YYYY-MM-DD",angle:21,addClassNames:!0,fontFamily:"sans-serif",fontSize:13,theme:"dark",categoryAxis:{boldPeriodBeginning:!1,firstDayOfWeek:0,parseDates:!0,axisThickness:0,gridThickness:1,dashLength:e.dashLength,equalSpacing:!0,guides:[{date:moment().format("YYYY-MM-DD"),lineColor:"#CCCCCC",lineAlpha:.3,lineThickness:2,dashLength:e.dashLength}]},chartCursor:{enabled:!0,balloonPointerOrientation:"horizontal",cursorPosition:"mouse",bulletSize:5,animationDuration:.3,categoryBalloonDateFormat:"MMM DD",graphBulletSize:0},trendLines:[],guides:[],allLabels:[],balloon:{},legend:{enabled:!0,useGraphSettings:!0,valueText:""},titles:[]}}return t}e.$inject=["AmChartFormats"],angular.module("dowser").factory("AmChartSerial",e)}(),function(){"use strict";function e(e,t){function a(e){this.results={},this.__dates=[],this.__unparsedData=e}return a.prototype.__createResultDates=function(){var e=this;e.__unparsedData.forEach(function(t){t.data.forEach(function(t){e.__dates.push(t.date)})});var t=moment(Math.max.apply(null,e.__dates)),a=moment(Math.min.apply(null,e.__dates));moment.range(a,t).by("hours",function(t){e.results[t.format("YYYY-MM-DD")]={date:t}})},a.prototype.__convertDate=function(e){return moment(e).startOf("day")},a.prototype.__convertAllDates=function(){var e=this;this.__unparsedData.forEach(function(t){t.data.forEach(function(t){t.date=e.__convertDate(t.date)})})},a.prototype.__formatResultDates=function(){this.results.forEach(function(e){e.date=e.date.format("YYYY-MM-DD")})},a.prototype.__getResultIndexByDate=function(e){for(var t=0;t<this.results.length;t+=1)if(this.results[t].date.isSame(e))return t},a.prototype.__buildResults=function(){var e=this;e.__unparsedData.forEach(function(t){t.data.forEach(function(a){var r=a.date.format("YYYY-MM-DD");return e.results[r][t.category]?e.results[r][t.category]+=a.value:e.results[r][t.category]=a.value})})},a.prototype.__addDashedOnToday=function(){var e=moment().format("YYYY-MM-DD");this.results[e].dashLength=t.dashLength},a.prototype.__convertResultsToArray=function(){var e=this;e.results=Object.keys(e.results).map(function(t){return e.results[t]})},a.prototype.parse=function(){var e=this;return e.__createResultDates(),e.__convertAllDates(),e.__buildResults(),e.__addDashedOnToday(),e.__convertResultsToArray(),e.__formatResultDates(),e.results},a}e.$inject=["$filter","AmChartFormats"],angular.module("dowser").factory("AmChartParser",e)}(),function(){"use strict";function e(e,t,a,r,n){function o(e,o){var i=new t;return i.valueAxes=[],i.graphs=[],o.forEach(function(e,t){i.valueAxes.push(new a(t)),i.graphs.push(new r(e,t))}),i.dataProvider=new n(o).parse(),i}return o}e.$inject=["ChartDataMock","AmChartSerial","AmChartValueAxe","AmChartGraph","AmChartParser"],angular.module("dowser").factory("AmChartOptions",e)}(),function(){"use strict";function e(e,t,a,r,n){function o(e,o){var i=new t;return i.valueAxes=[],i.graphs=[],i.valueAxes.push(new a(1)),i.graphs.push(new r(o,1)),delete i.legend,delete i.chartCursor,i.colors=[],i.categoryAxis.labelsEnabled=!1,i.categoryAxis.gridThickness=0,i.categoryAxis.dashLength=0,i.categoryAxis.gridAlpha=0,i.categoryAxis.axisAlpha=0,i.balloon={borderAlpha:0,borderThickness:0,fillAlpha:0,fontSize:0},i.graphs[0].bulletSize=9,i.graphs[0].lineThickeness=2,angular.isArray(o)||(o=[o]),i.dataProvider=new n([o[0]]).parse(),i}return o}e.$inject=["ChartDataMock","AmChartSerial","AmChartValueAxe","AmChartGraph","AmChartParser"],angular.module("dowser").factory("AmChartMiniOptions",e)}(),function(){"use strict";function e(){function e(e,t){return{balloonText:"[[value]]"+(e.unit||"un"),bullet:"round",dashLengthField:"dashLength",id:"AmGraph-"+t,lineAlpha:1,bulletSize:10,bulletBorderAlpha:1,bulletBorderColor:"#455A64",lineThickness:3,markerType:"square",title:e.category,valueAxis:"ValueAxis-"+t,valueField:e.category}}return e}angular.module("dowser").factory("AmChartGraph",e)}(),function(){"use strict";angular.module("dowser").constant("AmChartFormats",{date:"MMM DD",dashLength:6,linesColorPallet:["#de4c4f","#d8854f","#eea638","#a7a737","#86a965","#8aabb0","#69c8ff","#cfd27e","#9d9888","#916b8a","#724887","#7256bc"]})}(),function(){"use strict";function e(e){function t(e){angular.isArray(e)||(e=[e]),this.data=e}return t.prototype.get=function(){return new e(this.data).parse()},t.prototype.add=function(e){return angular.isArray(e)?void e.forEach(this.data.push):this.data.push(e)},t}e.$inject=["AmChartParser"],angular.module("dowser").factory("AmChartDataStore",e)}(),function(){"use strict";function e(){function e(){for(var e=[],a=0;10>=a;a++){var r=t();e.push(r)}return e}function t(){var e={};return e.date=a(),e.value=r(1,10),e}function a(){var e=moment(),t=e.startOf().date(),a=e.endOf().date(),n=r(t,a);return+e.date(n)}function r(e,t){return Math.floor(Math.random()*t+e)}return{generate:e}}angular.module("dowser").factory("DataGenerator",e)}(),function(){"use strict";function e(){function e(e){particlesJS(e,{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}return{start:e}}angular.module("dowser").factory("Particles",e)}(),function(){"use strict";function e(e,t,a){function r(r,n){t.__get("Chart/Data/"+n).then(function(){var t=a.get(n);e.$emit("chart:"+r+":load",t)})}return{load:r}}e.$inject=["$rootScope","Api","ChartDataMock"],angular.module("dowser").factory("ChartData",e)}(),function(){"use strict";function e(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}function t(t){var r=[{category:"My Sells",unit:"k",data:[{date:1455365898e3,value:124},{date:1455452328e3,value:225},{date:1455538746e3,value:223},{date:1455625156e3,value:125},{date:1455711569e3,value:206},{date:1455711574e3,value:126},{date:1455797998e3,value:228},{date:1455884411e3,value:128},{date:1455974425e3,value:129},{date:1456057242e3,value:130},{date:1456143657e3,value:30},{date:1456230069e3,value:132},{date:1456316481e3,value:133},{date:1456402893e3,value:231},{date:1456489323e3,value:233},{date:1456575735e3,value:122},{date:1456667562060,value:341}]},{category:"Ice Cream Sells",data:[{date:1455365898e3,value:e(50,380)},{date:1455452328e3,value:e(50,380)},{date:1455538746e3,value:e(50,380)},{date:1455625156e3,value:e(50,380)},{date:1455711574e3,value:e(50,380)},{date:1455797998e3,value:e(50,380)},{date:1455884411e3,value:e(50,380)},{date:1455974425e3,value:e(50,380)},{date:1456057242e3,value:e(50,380)},{date:1456143657e3,value:e(50,380)},{date:1456230069e3,value:e(50,380)},{date:1456316481e3,value:e(50,380)},{date:1456402893e3,value:e(50,380)},{date:1456489323e3,value:e(50,380)},{date:1456575735e3,value:e(50,380)},{date:1456667562060,value:e(50,380)}]},{category:"Weather",unit:"ºC",data:[{date:1455365898e3,value:e(14,33)},{date:1455452328e3,value:e(14,33)},{date:1455538746e3,value:e(14,33)},{date:1455625156e3,value:e(14,33)},{date:1455711574e3,value:e(14,33)},{date:1455797998e3,value:e(14,33)},{date:1455884411e3,value:e(14,33)},{date:1455974425e3,value:e(14,33)},{date:1456057242e3,value:e(14,33)},{date:1456143657e3,value:e(14,33)},{date:1456230069e3,value:e(14,33)},{date:1456316481e3,value:e(14,33)},{date:1456402893e3,value:e(14,33)},{date:1456489323e3,value:e(14,33)},{date:1456575735e3,value:e(14,33)},{date:1456667562060,value:e(14,33)}]}];return t?(r=r.filter(function(e){return e.category===t})[0],r.category=r.category+" "+ ++a,r):r}var a=0;return{get:t}}angular.module("dowser").factory("ChartDataMock",e)}(),function(){"use strict";function e(){function e(e,t,a){var r=this;r.chartId="chart-"+r.identifier,r.data=[],r.renderChart=function(){if(AmCharts.isReady){var e=new a(r.identifier,r.data);return AmCharts.makeChart(r.chartId,e)}AmCharts.ready(r.renderChart)},r.addData=function(e){return angular.isArray(e)?void e.forEach(r.data.push):r.data.push(e)},r.event=e.$on("chart:"+r.identifier+":load",function(e,a){r.addData(a),t(r.renderChart)})}e.$inject=["$rootScope","$timeout","AmChartOptions"];var t={restrict:"E",templateUrl:"app/components/chart/chart.html",scope:{identifier:"@"},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("dowser").directive("chart",e)}(),function(){"use strict";function e(){function e(e,t,a){var r=this;r.chartId="chart-"+r.identifier,r.renderChart=function(e){if(AmCharts.isReady){var t=new a(r.identifier,e);return AmCharts.makeChart(r.chartId,t)}AmCharts.ready(r.renderChart)},r.event=e.$on("chart:"+r.identifier+":load",function(e,a){t(function(){r.renderChart(a)})})}e.$inject=["$rootScope","$timeout","AmChartMiniOptions"];var t={restrict:"E",templateUrl:"app/components/chart/chart-mini.html",scope:{identifier:"@"},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("dowser").directive("chartMini",e)}(),function(){"use strict";function e(e,t,a){function r(t){return new Promise(function(r){a.info("Getting: "+i+t),e(r,2e3)})}function n(e){return t.get(i+e)}function o(e,a){return t.post(i+e,a)}var i="http://158.85.199.5:3002/";return{__get:r,get:n,post:o}}e.$inject=["$timeout","$http","$log"],angular.module("dowser").factory("Api",e)}(),function(){"use strict";function e(e,t){var a=this;a.progress=!1,a.progressClass="progress-hide",a.event=e.$on("wizard:progress",function(){a.progress=!a.progress,a.progressClass=a.progress?"progress-show":"progress-hide"}),t.go("wizard.register")}e.$inject=["$rootScope","$state"],angular.module("dowser").controller("WizardController",e)}(),function(){"use strict";function e(e,t,a){function r(){e.$emit("wizard:progress"),a.go("wizard.importer",n.data)}var n=this;n.data={name:void 0,kind:void 0,userId:"user"},n.next=function(){e.$emit("wizard:progress"),t(r,500)}}angular.module("dowser").controller("RegisterController",e),e.$inject=["$rootScope","$timeout","$state"]}(),function(){"use strict";function e(e,t,a){var r=this;a.start("particles-js"),r.getStarted=function(){t(function(){e.go("wizard.register")},500)}}angular.module("dowser").controller("MainController",e),e.$inject=["$state","$timeout","Particles"]}(),function(){"use strict";function e(e,t,a,r,n,o){function i(){var t=r;t.points=d(l.data.points),e.$emit("wizard:progress"),a.go("wizard.agreement",{data:t})}function s(e){var t=angular.toJson(e,2);return c.concat(t)}function d(e){var t=e.replace(c,"");return angular.fromJson(t)}var l=this,c="// This is just an Example data\n",u=o.generate();l.data={points:s(u)},l.aceSettings={showGutter:!1,theme:"twilight",mode:"json",firstLineNumber:5},l.next=function(){e.$emit("wizard:progress"),t(i,500)}}angular.module("dowser").controller("ImporterController",e),e.$inject=["$rootScope","$timeout","$state","$stateParams","Api","DataGenerator"]}(),function(){"use strict";function e(e,t,a,r){var n=this;n.inputSearch="",n.chartList=[{dataName:"Test"}],n.comparableCharts=[{identifier:"weather",dataName:"Weather"},{identifier:"ice-cream-sells",dataName:"Ice Cream Sells"}],r.load("main","My Sells"),n.comparableCharts.forEach(function(e){r.load(e.identifier,e.dataName)}),n.addNewChart=function(){e(function(){t.go("wizard.register")},500)},n.addChart=function(e){r.load("main",e)}}e.$inject=["$timeout","$state","$stateParams","ChartData"],angular.module("dowser").controller("DashboardController",e)}(),function(){"use strict";function e(e,t,a,r,n,o,i){function s(t){return function(){e.$emit("wizard:progress"),a(t,500)}}var d=this;d.accept=s(function(){i.post("DataType/Insert",r.data).then(function(a){e.$emit("wizard:progress"),o.ownCharts.push(a.data.generated_keys),t.go("dashboard")})["catch"](n.error)}),d.deny=s(function(){e.$emit("wizard:progress"),t.go("main")})}e.$inject=["$rootScope","$state","$timeout","$stateParams","$log","$localStorage","Api"],angular.module("dowser").controller("AgreementController",e)}(),function(){"use strict";function e(e){e.ownCharts&&(e.ownCharts=[])}e.$inject=["$localStorage"],angular.module("dowser").run(e)}(),function(){"use strict";function e(e,t){e.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("wizard",{url:"/wizard",templateUrl:"app/wizard/wizard.html",controller:"WizardController",controllerAs:"wizard"}).state("wizard.register",{templateUrl:"app/register/register.html",controller:"RegisterController",controllerAs:"register"}).state("wizard.importer",{params:{name:void 0,kind:void 0,userId:"user"},templateUrl:"app/importer/importer.html",controller:"ImporterController",controllerAs:"importer"}).state("wizard.agreement",{params:{data:{}},templateUrl:"app/agreement/agreement.html",controller:"AgreementController",controllerAs:"agreement"}).state("dashboard",{params:{data:{}},url:"/dashboard",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"dashboard"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("dowser").config(e)}(),function(){"use strict";angular.module("dowser").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("dowser").config(e)}(),angular.module("client").run(["$templateCache",function(e){e.put("app/agreement/agreement.html",'<div class="agreement"><h3 class="agreement-title md-display-2">Do you accept to share your data?</h3><p class="agreement-description md-headline">If you accept you will have access for data from other users.</p><md-button ng-click="agreement.accept()" class="md-raised md-primary wizard-button">Accept</md-button><md-button ng-click="agreement.deny()" class="md-raised md-warn wizard-button">Deny</md-button></div>'),e.put("app/dashboard/dashboard.html",'<div class="dashboard full-screen dark-theme"><div class="sidebar"><h1 class="logo">Dowser</h1><div class="charts"><div class="chart-features"><md-button ng-click="dashboard.addNewChart()" class="md-raised md-primary">Add Chart</md-button></div><ul class="chart-list"><li class="chart-item chart-item-active" ng-repeat="chartItem in dashboard.chartList track by $index">{{ chartItem.dataName }}</li></ul></div></div><div class="content"><h2 class="md-headline">Test x Days</h2><chart identifier="main"></chart><h3 class="md-title">Comparable Charts<div class="comparable-charts"><div ng-repeat="comparableChartItem in dashboard.comparableCharts" class="comparable-chart-item"><h4 class="md-subhead">{{ comparableChartItem.dataName }}</h4><chart-mini ng-click="dashboard.addChart(comparableChartItem.dataName)" identifier="{{ comparableChartItem.identifier }}"></chart-mini></div></div></h3></div></div>'),e.put("app/importer/importer.html",'<p class="instructions">Add initial data to create your chart.</p><div class="input-ace" ng-model="importer.data.points" ui-ace="importer.aceSettings"></div><md-button ng-click="importer.next()" class="md-raised md-primary wizard-button">Save</md-button>'),e.put("app/main/main.html",'<div class="main full-screen dark-theme"><div id="particles-js"></div><div class="header"><h1 class="logo">Dowser</h1></div><div class="content content-flex"><div class="opening"><h2 class="opening-title md-display-1">Data prediction for Humans</h2><p class="opening-description md-subhead">Analyze data and predict future outcomes using a simple interface. Compare with real data to understand the trend of your business.</p><md-button class="opening-button md-primary md-raised" ng-click="main.getStarted()">Get started</md-button></div></div><div class="footer">Created with<3 by="" humans="" <="" div=""></3></div></div>'),e.put("app/register/register.html",'<p class="instructions">Complete the form to create the data structure for the creation of your chart.</p><form name="registerForm"><md-input-container><label>Data name</label> <input required="" ng-model="register.data.name" autocomplete="off" md-placeholder="Weather"><div class="input-hint">Ex: Weather</div></md-input-container><md-input-container><label>Unit</label> <input required="" ng-model="register.data.kind" autocomplete="off" md-placeholder="ºF"><div class="input-hint">Ex: ºF</div></md-input-container><md-button ng-click="!registerForm.$valid || register.next()" class="md-raised md-primary wizard-button">Save</md-button></form>'),e.put("app/wizard/wizard.html",'<md-progress-linear class="progress" ng-class="wizard.progressClass" md-mode="indeterminate"></md-progress-linear><div class="wizard full-screen light-theme"><div class="header"><h1 class="logo">Dowser</h1></div><div class="content"><div class="wizard-view" ui-view=""></div></div><div class="footer">Created with<3 by="" humans="" <="" div=""></3></div></div>'),e.put("app/components/chart/chart-mini.html",'<div id="{{ vm.chartId }}" class="chart-mini"><md-progress-circular class="md-warn" md-mode="indeterminate"></md-progress-circular></div>'),e.put("app/components/chart/chart.html",'<div id="{{ vm.chartId }}" class="chart"><md-progress-circular class="md-warn" md-mode="indeterminate"></md-progress-circular></div>')}]);
//# sourceMappingURL=../maps/scripts/app-8ed64cc11e.js.map