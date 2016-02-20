(function() {
  'use strict';

  angular
    .module('dowser')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
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
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
