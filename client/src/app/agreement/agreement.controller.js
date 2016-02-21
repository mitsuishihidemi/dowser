(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout, $stateParams, $log, $localStorage, Api) {
    var vm = this;

    vm.accept = debounce(function() {
      Api.post('DataType/Insert', $stateParams.data)
        .then(function(response) {
          $rootScope.$emit('wizard:progress');
          $localStorage.ownCharts.push(response.data.generated_keys);
          $state.go('dashboard');
        })
        .catch($log.error);
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
