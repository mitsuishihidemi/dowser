(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartValueAxe', AmChartValueAxeService);

  /** @ngInject */
  function AmChartValueAxeService() {
    function AmChartValueAxe(index) {
      return {
        "id": "ValueAxis-" + index,
        "axisThickness": 0,
        "gridCount": 0,
        "gridThickness": 0,
        "ignoreAxisWidth": true,
        "labelsEnabled": false
      };
    }

    return AmChartValueAxe;
  }
})();
