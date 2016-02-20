(function() {
  'use strict';

  angular
    .module('dowser')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
