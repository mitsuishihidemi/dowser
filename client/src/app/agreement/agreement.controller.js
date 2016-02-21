(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('AgreementController', AgreementController);

  // AgreementController.$inject = ['$rootScope', '$state', '$timeout', '$stateParams', '$log', 'Api'];

  /** @ngInject */
  function AgreementController($rootScope, $state, $timeout, $stateParams, $log, Api) {
    var vm = this;

    vm.accept = debounce(function() {
      Api.post('DataType/Insert', $stateParams, function(data) {
        $log.error('success', data);
      });
      // Api.post('ageement', {}, function() {
      //   $rootScope.$emit('wizard:progress');
      //   $state.go('dashboard');
      // });
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
