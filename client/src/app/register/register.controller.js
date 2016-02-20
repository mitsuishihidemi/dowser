(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$rootScope', '$timeout', '$state', 'Api'];

  /** @ngInject */
  function RegisterController($rootScope, $timeout, $state, Api) {
    var vm = this;

    vm.data = {
      dataName: undefined,
      unit: undefined,
      itAcumulates: false
    };

    vm.next = function() {
      $rootScope.$emit('wizard:progress');
      $timeout(registerData, 500);
    };

    function registerData() {
      Api.post('register', vm.data, function() {
        $rootScope.$emit('wizard:progress');
        $state.go('wizard.importer', vm.data);
      });
    }
  }
})();
