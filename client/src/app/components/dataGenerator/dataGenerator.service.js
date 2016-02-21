(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('DataGenerator', DataGenerator);

  /** @ngInject */
  function DataGenerator() {

    return {
      generate: generate
    };

    function generate() {
      var data = [];

      for (var i = 0; i <= 10; i++) {
        var item = createItem();
        data.push(item);
      }

      return data;
    }

    function createItem() {
      var item = {};
      item.date = createTimeStamp();
      item.value = randomNumber(1, 10);
      return item;
    }

    function createTimeStamp() {
      var today = moment();
      var startDate = today.startOf().date();
      var endDate = today.endOf().date();
      var randomDate = randomNumber(startDate, endDate);
      return +today.date(randomDate);
    }

    function randomNumber(start, end) {
      return Math.floor((Math.random() * end) + start);
    }
  }
})();
