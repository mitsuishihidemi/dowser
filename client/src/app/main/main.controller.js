(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$timeout', 'Particles'];

  /** @ngInject */
  function MainController($state, $timeout, Particles) {
    var vm = this;

    Particles.start('particles-js');

    vm.getStarted = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);
    }
  }
})();
