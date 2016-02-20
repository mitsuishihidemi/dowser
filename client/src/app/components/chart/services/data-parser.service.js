(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartDataParser', ChartDataParser);

  /** @ngInject */
  function ChartDataParser($filter) {
    function Parser(data) {
      this.data = data;
      this.timestampColumn = [];
      this.columns = [];
      this.regions = {};
    }

    Parser.prototype.__existsNeedleByProperty = function(property, value, array) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][property] === value) {
          return true;
        }
      }
      return false;
    };

    Parser.prototype.__normalizeTimestamps = function() {
      var self = this;

      self.data.forEach(function(set) {
        set.data.forEach(function(data) {
          self.data.forEach(function(otherSet) {
            if (!self.__existsNeedleByProperty('date', data.date, otherSet.data)) {
              otherSet.data.push({ date: data.date, value: null });
            }
          });
        });
      });
    };

    Parser.prototype.__orderDataByDate = function() {
      this.data.forEach(function(categoryData) {
        categoryData.data = categoryData.data.sort(function(left, right) {
          return left.date > right.date;
        });
      });
    };

    Parser.prototype.__parseTimestamps = function() {
      var column = ['timestamp'];

      this.data.forEach(function(set) {
        set.data.forEach(function(subset) {
          var parsedTimestamp = $filter('chartTimestamp')(subset.date);
          if (column.indexOf(parsedTimestamp) < 0) {
            column.push(parsedTimestamp);
          }
        });
      });

      this.timestampColumn = column;
      this.columns.push(column);
    };

    Parser.prototype.__parseCategory = function(categorySet) {
      var self = this;
      var column = new Array(this.timestampColumn.length).fill(null);

      column[0] = categorySet.category;

      categorySet.data.forEach(function(categoryData) {
        var parsedTimestamp = $filter('chartTimestamp')(categoryData.date);
        var columnIndex = self.timestampColumn.indexOf(parsedTimestamp);
        column[columnIndex] = categoryData.value;
      });

      return column;
    };

    Parser.prototype.__parseCategories = function() {
      var self = this;

      self.data.forEach(function(set) {
        self.columns.push(self.__parseCategory(set));
      });
    };

    Parser.prototype.__buildRegions = function() {
      var self = this;
      var endIndex = self.timestampColumn.length;
      var startIndex = self.timestampColumn.indexOf($filter('chartTimestamp')(Date.now()));

      self.columns.forEach(function(column) {
        var category = column[0];
        if (category === 'timestamp') {
          return;
        }
        self.regions[category] = [{ start: startIndex, end: endIndex }];
      });
    };

    Parser.prototype.parse = function() {
      this.__normalizeTimestamps();
      this.__orderDataByDate();
      this.__parseTimestamps();
      this.__parseCategories();
      this.__buildRegions();

      var obj = {
        x: 'timestamp',
        xFormat: '%Y %m %d',
        columns: this.columns
      };

      return obj;
    };

    return Parser;
  }
})();
