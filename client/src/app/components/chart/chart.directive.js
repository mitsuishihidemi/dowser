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
    function ChartController($scope, $rootScope, $timeout, AmChartOptions, AmChartDataStore, AmChartMerge) {
      var vm = this;

      vm.chartId = 'chart-' + vm.identifier
      vm.dataStore = new AmChartDataStore();

      vm.renderChart = function() {
        if (AmCharts.isReady) {
          var chart = new AmChartOptions(vm.identifier, vm.dataStore.get());
          return AmCharts.makeChart(vm.chartId, chart);
        }
        AmCharts.ready(vm.renderChart);
      };

      vm.loadEvent = $rootScope.$on('chart:' + vm.identifier + ':load', function(evt, data) {
        vm.dataStore.add(data);
        $timeout(vm.renderChart);
      });

      vm.mergeEvent = $rootScope.$on('chart:' + vm.identifier + ':merge', function() {
        var data = angular.copy(vm.dataStore.get());
        new AmChartMerge(data).get(function(merged) {
          vm.dataStore.addOnFirst(merged);
          $timeout(vm.renderChart);
        });
      });
    }
  }

})();
