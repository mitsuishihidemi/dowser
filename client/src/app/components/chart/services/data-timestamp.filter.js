(function() {
  'use strict';

  angular
    .module('dowser')
    .filter('chartTimestamp', chartTimestamp);

  /** @ngInject */
  function chartTimestamp() {
    return function(date) {
      date = new Date(parseInt(date, 10));
      return date.getFullYear() + ' ' + date.getMonth() + ' ' + date.getDate();
    };
  }
})();
