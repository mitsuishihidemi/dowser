(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.getStarted = function() {
      $state.go('wizard')
    }
  }
})();
