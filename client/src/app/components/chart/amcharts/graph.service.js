(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartGraph', AmChartGraphService);

  /** @ngInject */
  function AmChartGraphService() {
    function AmChartGraph(data, index) {
      return {
        "balloonText": "[[value]] " + (data.unit || 'un'),
        "bullet": "round",
        "dashLengthField": "dashLength",
        "id": "AmGraph-" + index,
        "lineAlpha": !index ? 1 : 0.5,
        "bulletSize": !index ? 10 : 8,
        "bulletBorderAlpha": !index ? 1 : 0.5,
        "bulletBorderColor": "#455A64",
        "lineThickness": 3,
        "markerType": "square",
        "title": data.category,
        "valueAxis": "ValueAxis-" + index,
        "fillAlphas": !index ? 0.1 : 0,
        "valueField": data.category
      };
    }

    return AmChartGraph;
  }
})();
