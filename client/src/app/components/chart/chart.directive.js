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
      scope: {
        identifier: '@'
      },
      controller: ChartController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChartController($scope, $rootScope, $timeout, AmChartOptions) {
      var vm = this;

      vm.chartId = 'chart-' + vm.identifier
      vm.data = [];

      vm.renderChart = function() {
        if (AmCharts.isReady) {
          var chart = new AmChartOptions(vm.identifier, vm.data);
          return AmCharts.makeChart(vm.chartId, chart);
        }
        AmCharts.ready(vm.renderChart);
      };

      vm.addData = function(data) {
        if (!angular.isArray(data)) {
          return vm.data.push(data);
        }
        data.forEach(vm.data.push);
      };

      vm.event = $rootScope.$on('chart:' + vm.identifier + ':load', function(evt, data) {
        vm.addData(data);
        $timeout(vm.renderChart);
      });
    }
  }

})();
