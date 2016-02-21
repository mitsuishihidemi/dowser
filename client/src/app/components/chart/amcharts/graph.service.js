(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartGraph', AmChartGraphService);

  /** @ngInject */
  function AmChartGraphService() {
    function AmChartGraph(data, index) {
      return {
        "balloonText": "[[value]]" + (data.unit || 'un'),
        "bullet": "round",
        "dashLengthField": "dashLength",
        "id": "AmGraph-" + index,
        "lineAlpha": 1,
        "lineThickness": 3,
        "markerType": "square",
        "title": data.category,
        "valueAxis": "ValueAxis-" + index,
        "valueField": data.category
      };
    }

    return AmChartGraph;
  }
})();
