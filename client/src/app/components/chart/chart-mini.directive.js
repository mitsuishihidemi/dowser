(function() {
  'use strict';

  angular
    .module('dowser')
    .directive('chartMini', chartMini);

  /** @ngInject */
  function chartMini() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/chart/chart-mini.html',
      scope: {
        identifier: '@'
      },
      controller: ChartMiniController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChartMiniController($rootScope, $timeout, AmChartMiniOptions) {
      var vm = this;

      vm.chartId = 'chart-' + vm.identifier

      vm.renderChart = function(data) {
        if (AmCharts.isReady) {
          var chart = new AmChartMiniOptions(vm.identifier, data);
          return AmCharts.makeChart(vm.chartId, chart);
        }
        AmCharts.ready(vm.renderChart);
      };

      vm.event = $rootScope.$on('chart:' + vm.identifier + ':load', function(evt, data) {
        $timeout(function() { vm.renderChart(data); });
      });
    }
  }

})();
