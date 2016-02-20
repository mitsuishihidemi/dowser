(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartData', ChartData);

  /** @ngInject */
  function ChartData($rootScope, Api, ChartDataMock, ChartDataParser) {
    var datas = [];

    return {
      load: load
    };

    function load(category) {
      Api.get('/chart/data/' + category, function(response) {
        datas.push(ChartDataMock.get(category));
        $rootScope.$emit('chart:load', new ChartDataParser(datas).parse());
      });
    }
  }
})();
