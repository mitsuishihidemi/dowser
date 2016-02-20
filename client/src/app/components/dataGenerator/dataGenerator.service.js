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

    function generate(structure) {
      var dataName = structure.dataName;
      var data = [];

      for (var i = 0; i <= 10; i++) {
        var item = createItem(dataName);
        data.push(item);
      }

      return prefixComment(data);
    }

    function prefixComment(data) {
      var comment = "// This is just an Example data\n";
      var stringfyData = JSON.stringify(data, null, 2);
      return comment.concat(stringfyData);
    }

    function createItem(dataName) {
      var item = {};
      item[dataName] = randomNumber(1, 10);
      item.timeStamp = createTimeStamp();
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
