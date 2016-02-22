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
      structuredData.data.sort(function(left, right) {
        return left.date.valueOf() - right.date.valueOf();
      });
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

    AmChartMerge.prototype.__removeBeforeToday = function(d) {
      var today = moment().startOf('day');
      var n = { dates: [], values: [] };

      for (var i = 0; i < d.dates.length; i += 1) {
        if (d.dates[i].diff(today) >= 0) {
          n.dates.push(d.dates[i]);
          n.values.push(d.values[i]);
        }
      }

      return n;
    }

    AmChartMerge.prototype.get = function(cb) {
      var self = this;

      if (self.__mergeWith.length < 1) {
        return;
      }

      self.__realData = self.__destructureData(self.__realData);
      self.__mergeWith = self.__mergeWith.map(function(d) {
        return self.__destructureData(d);
      });

      self.__realData = self.__removeBeforeToday(this.__realData);
      self.__mergeWith = self.__mergeWith.map(function(d) {
        return self.__removeBeforeToday(d);
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
