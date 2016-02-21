(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout, $stateParams) {
    var vm = this;

    vm.accept = debounce(function() {
      // Api.post('DataType/Insert', $stateParams, function(data) {
      //   $log.error('success', data);
      // });
      $rootScope.$emit('wizard:progress');
      $state.go('dashboard', $stateParams);
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
