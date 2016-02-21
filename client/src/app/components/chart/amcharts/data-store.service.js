(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartDataStore', AmChartDataStore);

  /** @ngInject */
  function AmChartDataStore(AmChartParser) {
    function AmChartDataStore(data) {
      if (!angular.isArray(data)) {
        data = [data];
      }

      this.data = data;
    }

    AmChartDataStore.prototype.get = function() {
      return new AmChartParser(this.data).parse();
    };

    AmChartDataStore.prototype.add = function(data) {
      if (!angular.isArray(data)) {
        return this.data.push(data);
      }
      data.forEach(this.data.push);
    };

    return AmChartDataStore;
  }
})();
