(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartData', ChartData);

  /** @ngInject */
  function ChartData($rootScope, Api, ChartDataMock, ChartDataParser) {
    return {
      load: load
    };

    function load() {
      Api.get('/chart/data', function(response) {
        $rootScope.$emit('chart:load', new ChartDataParser(ChartDataMock.get()).parse());
      });
    }
  }
})();
