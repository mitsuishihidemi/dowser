(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, ChartData) {
    var vm = this;

    vm.inputSearch = '';
    vm.chartList = [
      { dataName: 'Test' }
    ];

    ChartData.load('main', 'My Sells');
    ChartData.load('ice-creams', 'Ice Cream Sells');
    ChartData.load('weather', 'Weather');

    vm.addChart = function(category) {
      ChartData.load('main', category);
    };
  }
})();
