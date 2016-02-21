(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, ChartData) {
    var vm = this;

    ChartData.load('My Sells');

    // vm.addChart = function(category) {
    //   ChartData.load(category);
    // };
  }
})();
