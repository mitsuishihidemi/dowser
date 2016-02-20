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
    function ChartController($element, $rootScope, $filter) {
      var vm = this;

      var chart;

      vm.render = function(data) {
        chart = c3.generate({
          bindto: $element.find('div')[0],
          data: data,
          axis: {
            x: {
              type: 'timeseries',
              tick: {
                format: '%m/%d'
              }
            }
          },
          regions: [
            { axis: 'x', start: $filter('chartTimestamp')(Date.now()), class: 'predictionDivisor' }
          ]
        });
      };

      $rootScope.$on('chart:load', function(evt, data) {
        if (!chart) {
          return vm.render(data);
        }

      });
    }
  }

})();
