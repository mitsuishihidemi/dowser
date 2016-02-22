(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartMerge', AmChartMergeService);

  /** @ngInject */
  function AmChartMergeService(Api) {
    function AmChartMerge(dataStore) {
      this.__original = dataStore[0];
      this.__realData = dataStore[0];
      this.__realDataId = this.__realData.id;
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
        dates: this.__realData.dates.slice(-destructuredData.length),
        values: destructuredData
      };

      var structuredData = {
        category: this.__realDataCategory,
        unit: this.__realDataUnit,
        id: this.__realDataId,
        data: []
      };

      for (var i = 0; i < data.dates.length; i += 1) {
        structuredData.data[i] = { date: data.dates[i], value: destructuredData[i] };
      }

      return structuredData;
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
    };

    function findIndex(date, arr) {
      for (var i = 0; i < arr.length; i += 1) {
        if (arr[i].date.isSame(date)) {
          return i;
        }
      }
    }

    AmChartMerge.prototype.__merge = function(other) {
      var original = angular.copy(this.__original);
      other = angular.copy(other);

      other.data.forEach(function(d) {
        var index = findIndex(d.date, original.data);
        original.data[index] = d;
      });

      return original;
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
          cb(self.__merge(data));
        });

      return self.dataStore;
    };

    return AmChartMerge;
  }
})();
