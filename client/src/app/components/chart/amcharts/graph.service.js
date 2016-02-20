(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartGraph', AmChartGraphService);

  /** @ngInject */
  function AmChartGraphService() {
    function AmChartGraph(data, index) {
      return {
        "balloonText": "[[value]]",
        "bullet": "round",
        "dashLengthField": "dashLength",
        "id": "AmGraph-" + index,
        "lineAlpha": 1,
        "lineThickness": 3,
        "markerType": "square",
        "title": "Ice Cream Sells",
        "valueAxis": "ValueAxis-" + index,
        "valueField": "Ice Cream Sells"
      };
    }

    return AmChartGraph;
  }
})();
