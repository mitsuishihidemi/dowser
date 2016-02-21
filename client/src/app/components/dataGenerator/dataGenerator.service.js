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
      var startDate = today.clone().subtract(10);
      return +moment(startDate + Math.random() * (today - startDate));
    }

    function randomNumber(start, end) {
      return Math.floor((Math.random() * end) + start);
    }
  }
})();
