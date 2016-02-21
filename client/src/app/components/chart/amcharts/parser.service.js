(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartParser', AmChartParserService);

  /** @ngInject */
  function AmChartParserService($filter, AmChartFormats) {
    function Result(category, date, value) {
      var result = {};
      result.date = date;
      result[category] = value;
      return result;
    }

    function AmChartParser(data) {
      this.results = {};
      this.__unparsedData = data;
    }

    AmChartParser.prototype.__convertDate = function(date) {
      return moment(date).startOf('day');
    };

    AmChartParser.prototype.__convertAllDates = function() {
      var self = this;

      this.__unparsedData.forEach(function(category) {
        category.data.forEach(function(data) {
          data.date = self.__convertDate(data.date);
        });
      });
    };

    AmChartParser.prototype.__formatResultDates = function() {
      this.results.forEach(function(result) {
        result.date = result.date.format(AmChartFormats.date);
      });
    };

    AmChartParser.prototype.__getResultIndexByDate = function(date) {
      for (var i = 0; i < this.results.length; i += 1) {
        if (this.results[i].date.isSame(date)) {
          return i;
        }
      }
    };

    AmChartParser.prototype.__buildResults = function() {
      var self = this;

      self.__unparsedData.forEach(function(set) {
        set.data.forEach(function(data) {
          var date = data.date.format('YYYY-MM-DD');
          if (self.results[date]) {
            if (self.results[date][set.category]) {
              return self.results[date][set.category] += data.value;
            }
            return self.results[date][set.category] = data.value;
          }
          self.results[date] = new Result(set.category, data.date, data.value);
        });
      });
    };

    AmChartParser.prototype.__addDashedOnToday = function() {
      var today = moment().format('YYYY-MM-DD');
      this.results[today]['dashLength'] = AmChartFormats.dashLength;
    };

    AmChartParser.prototype.__convertResultsToArray = function() {
      var self = this;
      self.results = Object.keys(self.results).map(function(key) {
        return self.results[key];
      });
    };

    AmChartParser.prototype.parse = function() {
      var self = this;

      self.__convertAllDates();
      self.__buildResults();
      self.__addDashedOnToday();
      self.__convertResultsToArray();
      self.__formatResultDates();

      return self.results;
    };

    return AmChartParser;
  }
})();
