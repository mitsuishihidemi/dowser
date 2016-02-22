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

    AmChartDataStore.prototype.__toggle = function(data) {
      var index;
      this.data.every(function(d, i) {
        return d.id !== data.id || (function() { index = i; })();
      });

      if (index) {
        this.data.splice(index, 1);
      } else {
        this.data.push(data);
      }
    };

    AmChartDataStore.prototype.toggle = function(data) {
      if (!angular.isArray(data)) {
        this.__toggle(data);
      } else {
        data.forEach(function(d) { this.__toggle(d); });
      }
    };

    AmChartDataStore.prototype.addOnFirst = function(data) {
      this.data.unshift(data);
    };

    return AmChartDataStore;
  }
})();
