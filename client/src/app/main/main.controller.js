(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout) {
    var vm = this;

    vm.getStarted = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);

    }
  }
})();
