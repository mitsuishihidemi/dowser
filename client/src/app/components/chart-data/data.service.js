(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartData', ChartData);

  /** @ngInject */
  function ChartData($rootScope, Api) {
    return {
      load: load,
      loadOn: loadOn
    };

    function parseData(data) {
      return {
        category: data.name,
        unit: data.kind,
        data: data.points.map(function(point) {
          return {
            date: point.date,
            value: point.value
          };
        })
      };
    }

    function load(identifier) {
      Api.get('DataType/Get/' + identifier)
        .then(function(response) {
          var data = parseData(response.data);
          $rootScope.$emit('chart:' + identifier + ':load', data);
        });
    }

    function loadOn(containerIdentifier, identifier) {
      Api.get('DataType/Get/' + identifier)
        .then(function(response) {
          var data = parseData(response.data);
          $rootScope.$emit('chart:' + containerIdentifier + ':load', data);
        });
    }
  }
})();
