(function() {
  'use strict';

  angular
    .module('dowser')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('wizard', {
        url: '/wizard',
        templateUrl: 'app/wizard/wizard.html',
        controller: 'WizardController',
        controllerAs: 'wizard'
      })
      .state('wizard.register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('wizard.importer', {
        params: {name: undefined, kind: undefined, userId: 'user'},
        templateUrl: 'app/importer/importer.html',
        controller: 'ImporterController',
        controllerAs: 'importer'
      })
      .state('wizard.agreement', {
        params: {data: {}},
        templateUrl: 'app/agreement/agreement.html',
        controller: 'AgreementController',
        controllerAs: 'agreement'
      })
      .state('dashboard', {
        params: {data: {}},
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
