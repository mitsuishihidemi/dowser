(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartOptions', AmChartOptionsFactory);

  /** @ngInject */
  function AmChartOptionsFactory(ChartDataMock, AmChartSerial, AmChartValueAxe, AmChartGraph, AmChartParser) {
    function AmChartOptions(id, datas) {
      var chart = new AmChartSerial();
      var mockDatas = ChartDataMock.get();

      chart.valueAxes = [];
      chart.graphs = [];

      mockDatas.forEach(function(data, index) {
        chart.valueAxes.push(new AmChartValueAxe(index));
        chart.graphs.push(new AmChartGraph(data, index));
      });

      chart.dataProvider = new AmChartParser(mockDatas).parse();

      console.log(datas);
      return chart;
    }

    return AmChartOptions;
  }
})();
