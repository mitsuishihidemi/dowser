(function() {
  'use strict';

  angular
    .module('dowser')
    .run(runBlock);

  /** @ngInject */
  function runBlock($localStorage) {
    if ($localStorage.ownCharts) {
      $localStorage.ownCharts = [];
    }
  }

})();
