(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartDataProvider', ChartDataProvider);

  /** @ngInject */
  function ChartDataProvider($q, Api, ChartDataMock) {
    return {
      load: load
    };

    function parse(data) {
      return data;
    }

    function load() {
      return $q(function(resolve) {
        Api.get('/chart/data', function(response) {
          resolve(parse(ChartDataMock.get()));
        });
      });
    }
  }
})();
