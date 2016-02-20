(function() {
  'use strict';

  angular
    .module('dowser')
    .directive('chart', chart);

  /** @ngInject */
  function chart() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/chart/chart.html',
      scope: {},
      controller: ChartController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChartController($rootScope, $timeout, AmChartOptions) {
      var vm = this;

      vm.chartId = 'chart' + Date.now();

      vm.makeChart= function(data) {
        if (AmCharts.isReady) {
          var options = new AmChartOptions(vm.chartId, data);
          AmCharts.makeChart(vm.chartId, options);
        } else {
          AmCharts.ready(function() {
            vm.makeChart(data);
          });
        }
      };

      $rootScope.$on('chart:load', function(evt, data) {
        $timeout(function() { vm.makeChart(data); });
      });
    }
  }

})();
