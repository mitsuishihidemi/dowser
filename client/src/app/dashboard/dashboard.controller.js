(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, ChartData) {
    ChartData.load('My Sells');
    $timeout(function() {
      ChartData.load('Ice Cream Sells');
    }, 3000);
    $timeout(function() {
      ChartData.load('Weather');
    }, 5000);
  }
})();
