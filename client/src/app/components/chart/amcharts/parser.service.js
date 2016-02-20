(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartParser', AmChartParserService);

  /** @ngInject */
  function AmChartParserService($filter) {
    function Result(category, date, value) {
      var result = {};
      result.date = date;
      result[category] = value;
      return result;
    }

    function AmChartParser(data) {
      this.results = [];
      this.__unparsedData = data;
    }

    AmChartParser.prototype.__convertDate = function(date) {
      return moment(date);
    };

    AmChartParser.prototype.__convertAllDates = function() {
      var self = this;

      this.__unparsedData.forEach(function(category) {
        category.data.forEach(function(data) {
          data.date = self.__convertDate(data.date);
        });
      });
    };

    AmChartParser.prototype.__getResultIndexByDate = function(date) {
      for (var i = 0; i < this.results.length; i += 1) {
        if (this.results[i].date.isSame(date)) {
          return i;
        }
      }
      return false;
    };

    AmChartParser.prototype.__addToResults = function(category, date, value) {
      var resultIndex = this.__getResultIndexByDate(date);

      if (!resultIndex) {
        return this.results.push(new Result(category, date, value));
      }

      this.results[resultIndex][category] = value;
    };

    AmChartParser.prototype.__buildResults = function() {
      var self = this;

      self.__unparsedData.forEach(function(set) {
        var category = set.category;
        set.data.forEach(function(data) {
          self.__addToResults(category, data.date, data.value)
        });
      });
    };

    AmChartParser.prototype.__sortResults = function() {
      this.results = this.results.sort(function(left, right) {
        return left.date.isAfter(right.date);
      });
    };

    AmChartParser.prototype.parse = function() {
      var self = this;

      self.__convertAllDates();
      self.__buildResults();
      self.__sortResults();

      console.log(self.results);
      return self.results;
    };

    return AmChartParser;
  }
})();
