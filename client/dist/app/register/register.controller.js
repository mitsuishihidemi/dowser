(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($rootScope, $timeout, $state, User) {
    var vm = this;

    vm.data = {
      name: undefined,
      kind: undefined,
      userId: User.username
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
