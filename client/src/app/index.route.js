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
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('importer', {
        url: '/importer',
        templateUrl: 'app/importer/importer.html',
        controller: 'ImporterController',
        controllerAs: 'importer'
      })
      .state('agreement', {
        url: '/agreement',
        templateUrl: 'app/agreement/agreement.html',
        controller: 'AgreementController',
        controllerAs: 'agreement'
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
