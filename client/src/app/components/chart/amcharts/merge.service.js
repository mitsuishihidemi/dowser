(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartMerge', AmChartMergeService);

  /** @ngInject */
  function AmChartMergeService(Api) {
    function AmChartMerge(dataStore) {
      this.__realData = dataStore[0];
      this.__realDataCategory = this.__realData.category;
      this.__realDataUnit = this.__realData.unit;
      this.__mergeWith = dataStore.slice(1);
    }

    AmChartMerge.prototype.__destructureData = function(structuredData) {
      var today = moment().startOf('day');
      var minDiff = moment().startOf('day').subtract(7, 'days').diff(today);
      var maxDiff = moment().endOf('day').add(7, 'days').diff(today);
      structuredData.data = structuredData.data.sort(function(left, right) {
        return left.date.valueOf() - right.date.valueOf();
      });
      structuredData.data = structuredData.data.filter(function(d) {
        return d.date.diff(today) >= minDiff && d.date.diff(today) < maxDiff;
      });
      console.log(structuredData.data);
      var dates = structuredData.data.map(function(d) {
        return d.date;
      });
      var values = structuredData.data.map(function(d) {
        return d.value;
      });
      return {
        dates: dates,
        values: values
      };
    };

    AmChartMerge.prototype.__structureData = function(destructuredData) {
      var data = {
        dates: this.__realData.dates,
        values: destructuredData
      };

      var merged = {
        category: 'Merged ' + this.__realDataCategory,
        unit: this.__realDataUnit,
        data: []
      };

      for (var i = 0; i < data.dates.length; i += 1) {
        merged.data[i] = { date: data.dates[i], value: data.values[i] };
      }

      return merged;
    };

    AmChartMerge.prototype.get = function(cb) {
      var self = this;

      if (self.__mergeWith.length < 1) {
        return;
      }

      self.__realData = self.__destructureData(self.__realData);
      self.__mergeWith = self.__mergeWith.map(function(d) {
        return self.__destructureData(d);
      });

      var realData = self.__realData.values;
      var mergeWith = self.__mergeWith.map(function(d) {
        return d.values;
      });

      Api
        .merge({ realData: realData, mergeWith: mergeWith || [] })
        .then(function(response) {
          var data = response.data.map(function(v) { return Math.round(v) });
          data = self.__structureData(data);
          cb(data);
        });

      return self.dataStore;
    };

    return AmChartMerge;
  }
})();
