(function() {
  'use strict';

  angular
    .module('dowser')
    .filter('chartTimestamp', chartTimestamp);

  /** @ngInject */
  function chartTimestamp() {
    function truncate(value) {
      if (value.length === 1) {
        return '0' + value;
      }
      return value;
    }

    return function(date) {
      date = new Date(parseInt(date, 10));
      return date.getFullYear() + ' ' + truncate(date.getMonth()) + ' ' + truncate(date.getDate());
    };
  }
})();
