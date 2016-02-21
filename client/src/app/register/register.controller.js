(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$rootScope', '$timeout', '$state'];

  /** @ngInject */
  function RegisterController($rootScope, $timeout, $state) {
    var vm = this;

    vm.data = {
      name: undefined,
      kind: undefined,
      userId: 'user'
    };

    vm.next = function() {
      $rootScope.$emit('wizard:progress');
      $timeout(registerData, 500);
    };

    function registerData() {
      $rootScope.$emit('wizard:progress');
      $state.go('wizard.importer', vm.data);
    }
  }
})();
