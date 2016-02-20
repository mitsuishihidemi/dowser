(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartDataProvider', ChartDataProvider);

  /** @ngInject */
  function ChartDataProvider($q, Api, ChartDataMock, ChartDataParser) {
    return {
      load: load
    };

    function load() {
      return $q(function(resolve) {
        Api.get('/chart/data', function(response) {
          resolve(new ChartDataParser(ChartDataMock.get()).parse());
        });
      });
    }
  }
})();
