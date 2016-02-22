(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartOptions', AmChartOptionsFactory);

  /** @ngInject */
  function AmChartOptionsFactory(ChartDataMock, AmChartSerial, AmChartValueAxe, AmChartGraph, AmChartParser) {
    function AmChartOptions(identifier, datas) {
      var chart = new AmChartSerial();

      chart.valueAxes = [];
      chart.graphs = [];

      datas.forEach(function(data, index) {
        chart.valueAxes.push(new AmChartValueAxe(index));
        chart.graphs.push(new AmChartGraph(data, index));
      });

      chart.dataProvider = new AmChartParser(datas).parse();

      return chart;
    }

    return AmChartOptions;
  }
})();
