(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  AgreementController.$inject = ['$rootScope', '$state', '$timeout', 'Api'];

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout, Api) {
    var vm = this;

    vm.accept = debounce(function() {
      Api.post('ageement', {}, function() {
        $rootScope.$emit('wizard:progress');
        $state.go('dashboard');
      });
    });

    vm.deny = debounce(function() {
      $rootScope.$emit('wizard:progress');
      $state.go('main');
    });

    function debounce(callback) {
      return function() {
        $rootScope.$emit('wizard:progress');
        $timeout(callback, 500);
      };
    }
  }
})();
