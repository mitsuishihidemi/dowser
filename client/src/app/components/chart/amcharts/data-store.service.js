(function() {
  'use strict';

  angular
  .module('dowser')
  .factory('AmChartDataStore', AmChartDataStore);

  /** @ngInject */
  function AmChartDataStore() {
    function AmChartDataStore(data) {
      if (!data) {
        data = [];
      }

      if (!angular.isArray(data)) {
        data = [data];
      }

      this.data = data;
    }

    AmChartDataStore.prototype.get = function() {
      return this.data;
    };

    AmChartDataStore.prototype.__add = function(data) {
      var index = 1;
      var categoryName = data.category;
      this.data.forEach(function(d, idx) {
        if (d.category == categoryName) {
          categoryName = data.category + ' ' + ++index;
        }
      });
      data.category = categoryName;
      this.data.push(data);
    };

    AmChartDataStore.prototype.add = function(data) {
      if (!angular.isArray(data)) {
        this.__add(data);
      } else {
        data.forEach(function(d) { this.__add(d); });
      }
      console.log(this.data);
    };

    return AmChartDataStore;
  }
})();
