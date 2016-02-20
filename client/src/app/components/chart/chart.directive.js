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
    function ChartController($element, ChartDataProvider) {
      var vm = this;

      var chart;

      vm.render = function(data) {
        chart = c3.generate({
          bindto: $element.find('div')[0],
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ]
          }
        });
      };

      ChartDataProvider.load().then(vm.render);
    }
  }

})();
