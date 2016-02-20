(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('WizardController', WizardController);

  /** @ngInject */
  function WizardController($rootScope, $state) {
    var vm = this;

    vm.progress = false;
    vm.progressClass = 'progress-hide';

    $rootScope.$on('wizard:progress', function() {
      vm.progress = !vm.progress;
      vm.progressClass = vm.progress ? 'progress-show' : 'progress-hide';      
    });

    $state.go('wizard.register');
  }
})();
