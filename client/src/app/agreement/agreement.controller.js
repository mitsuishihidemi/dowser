(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout, $stateParams, $log, Api) {
    var vm = this;

    vm.accept = debounce(function() {
      Api.post('DataType/Insert', $stateParams)
        .then(function(response) {
          $rootScope.$emit('wizard:progress');
          $state.go('dashboard');
        })
        .catch(function(e) {
          console.log(e);
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
