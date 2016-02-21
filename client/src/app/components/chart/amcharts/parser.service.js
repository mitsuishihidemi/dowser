(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartParser', AmChartParserService);

  /** @ngInject */
  function AmChartParserService($filter, AmChartFormats) {
    function AmChartParser(data) {
      this.results = {};
      this.__dates = [];
      this.__unparsedData = data;
    }

    AmChartParser.prototype.__createResultDates = function() {
      var self = this;
      self.__unparsedData.forEach(function(category) {
        category.data.forEach(function(data) {
          self.__dates.push(data.date);
        });
      });
      var maxDate = moment(Math.max.apply(null, self.__dates));
      var minDate = moment(Math.min.apply(null, self.__dates));
      moment.range(minDate, maxDate).by('hours', function(date) {
        self.results[date.format('YYYY-MM-DD')] = { date: date };
      });
    };

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
        result.date = result.date.format('YYYY-MM-DD');
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

          if (self.results[date][set.category]) {
            return self.results[date][set.category] += data.value;
          }

          return self.results[date][set.category] = data.value;
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

      self.__createResultDates();
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
