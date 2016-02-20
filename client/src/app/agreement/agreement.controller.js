(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  AgreementController.$inject = ['$state', '$timeout'];

  /** @ngInject */
  function AgreementController($state, $timeout) {
    var vm = this;

    vm.accept = debounce(function() {
      $state.go('dashboard');
    });

    vm.deny = debounce(function() {
      $state.go('main');
    });

    function debounce(callback) {
      return function() {
        $timeout(callback, 500);
      };
    }
  }
})();
