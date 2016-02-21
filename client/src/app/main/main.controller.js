(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout, Particles) {
    var vm = this;

    Particles.run('particles-js');

    vm.getStarted = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);
    }
  }
})();
