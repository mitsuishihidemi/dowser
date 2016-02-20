(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartOptions', AmChartOptionsFactory);

  /** @ngInject */
  function AmChartOptionsFactory(ChartDataMock, AmChartSerial, AmChartValueAxe, AmChartGraph) {
    function AmChartOptions(id, datas) {
      var chart = new AmChartSerial();
      chart.valueAxes = [];

      console.log(ChartDataMock.get());
      datas.forEach(function(data, index) {
        chart.valueAxes.push(new AmChartValueAxe(index));
      });

      chart.dataProvider = datas;

      return chart;
    }

    return AmChartOptions;
  }
})();
