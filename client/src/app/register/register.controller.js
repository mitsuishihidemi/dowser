(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$timeout', '$state', 'Api'];

  /** @ngInject */
  function RegisterController($timeout, $state, Api) {
    var vm = this;

    vm.data = {
      dataName: undefined,
      unit: undefined,
      itAcumulates: false
    };

    vm.next = function() {
      $timeout(registerData, 500);
    };

    function registerData() {
      Api.post('register', vm.data, function() {
        $state.go('wizard.importer', vm.data);
      });
    }
  }
})();
