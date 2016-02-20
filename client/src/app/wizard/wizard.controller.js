(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('WizardController', WizardController);

  /** @ngInject */
  function WizardController($state) {
    $state.go('wizard.register');
  }
})();
