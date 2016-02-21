(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  AgreementController.$inject = ['$rootScope', '$state', '$timeout'];

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout) {
    var vm = this;

    vm.accept = debounce(function() {
      $state.go('dashboard');
    });

    vm.deny = debounce(function() {
      $state.go('main');
    });

    function debounce(callback) {
      $rootScope.$emit('wizard:progress');
      return function() {
        $timeout(function() {
          $rootScope.$emit('wizard:progress');
          callback();
        }, 1000);
      };
    }
  }
})();
