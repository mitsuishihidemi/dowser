(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$state', 'Api'];

  /** @ngInject */
  function RegisterController($state, Api) {
    var vm = this;

    vm.data = {
      dataName: undefined,
      unit: undefined,
      itAcumulates: false
    };

    vm.next = function() {
      Api.post('register', vm.data, function() {
        $state.go('wizard.importer');
      });
    };

  }
})();
