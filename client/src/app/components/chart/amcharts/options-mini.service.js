(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartMiniOptions', AmChartMiniOptionsService);

  /** @ngInject */
  function AmChartMiniOptionsService(ChartDataMock, AmChartSerial, AmChartValueAxe, AmChartGraph, AmChartParser) {
    function AmChartMiniOptions(identifier, data) {
      var chart = new AmChartSerial();

      chart.valueAxes = [];
      chart.graphs = [];

      chart.valueAxes.push(new AmChartValueAxe(1));
      chart.graphs.push(new AmChartGraph(data, 1));

      delete chart.legend;
      delete chart.chartCursor;

      chart.colors = [];
      chart.categoryAxis.labelsEnabled = false;
      chart.categoryAxis.gridThickness = 0;
      chart.categoryAxis.dashLength = 0;
      chart.categoryAxis.gridAlpha = 0;
      chart.categoryAxis.axisAlpha = 0;
      chart.balloon = {
        borderAlpha: 0,
        borderThickness: 0,
        fillAlpha: 0,
        fontSize: 0
      }

      chart.graphs[0].bulletSize = 9;
      chart.graphs[0].lineThickeness = 2;

      if (!angular.isArray(data)) {
        data = [data];
      }

      chart.dataProvider = new AmChartParser([data[0]]).parse();

      return chart;
    }

    return AmChartMiniOptions;
  }
})();
