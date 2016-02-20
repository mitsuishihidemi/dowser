(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  AgreementController.$inject = ['$state'];

  /** @ngInject */
  function AgreementController($state) {
    var vm = this;

    vm.accept = function() {
      $state.go('dashboard');
    };
  }
})();
