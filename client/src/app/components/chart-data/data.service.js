(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartData', ChartData);

  /** @ngInject */
  function ChartData($rootScope, Api, ChartDataMock) {
    return {
      load: load
    };

    function load(identifier, category) {
      Api.get('/chart/data/' + category, function() {
        var data = ChartDataMock.get(category);
        $rootScope.$emit('chart:' + identifier + ':load', data);
      });
    }
  }
})();
