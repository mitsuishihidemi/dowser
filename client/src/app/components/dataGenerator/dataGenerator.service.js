(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('DataGenerator', DataGenerator);

  /** @ngInject */
  function DataGenerator() {
    var days = 30;

    return {
      generate: generate
    };

    function generate() {
      var data = [];

      for (var i = 0; i < days; i++) {
        var item = createItem(i);
        data.push(item);
      }

      return data;
    }

    function createItem(i) {
      var item = {};
      item.date = createTimeStamp(i);
      item.value = randomNumber(1, 100);
      return item;
    }

    function createTimeStamp(i) {
      var today = moment();
      var startDate = today.clone().subtract(days - i, 'days');
      return +moment(startDate);
    }

    function randomNumber(start, end) {
      return Math.floor((Math.random() * end) + start);
    }
  }
})();
