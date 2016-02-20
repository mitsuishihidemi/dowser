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

      $rootScope.$on('amchart:load', function(evt, data) {
        $timeout(function() { vm.makeChart(data); });
      });

      $rootScope.$emit('amchart:load', [
        {
          "date": "2016-02-17",
          "Ice Cream Sells": "800",
          "Weather": "25"
        },
        {
          "date": "2016-02-18",
          "Ice Cream Sells": "600",
          "Weather": "27"
        },
        {
          "date": "2016-02-19",
          "Ice Cream Sells": "500",
          "Weather": "30"
        },
        {
          "date": "2016-02-20",
          "dashLength": 8,
          "Ice Cream Sells": "100",
          "Weather": "30"
        },
        {
          "date": "2016-02-21",
          "Ice Cream Sells": "200",
          "Weather": "18"
        },
        {
          "date": "2016-02-22",
          "Ice Cream Sells": "300",
          "Weather": "25"
        },
        {
          "date": "2016-02-23",
          "Ice Cream Sells": "600",
          "Weather": "28"
        }
      ]);
    }
  }

})();
