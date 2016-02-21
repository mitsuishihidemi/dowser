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

    function load(identifier, name) {
      Api.__get('DataType/Get/' + identifier)
        .then(function() {
          var data = ChartDataMock.get();
          $rootScope.$emit('chart:' + identifier + ':load', data);
        });
    }
  }
})();
