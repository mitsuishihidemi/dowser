(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, $state, ChartData) {
    var vm = this;

    vm.inputSearch = '';
    vm.chartList = [
      { dataName: 'Test' }
    ];
    vm.comparableCharts = [
      { identifier: 'weather', dataName: 'Weather'},
      { identifier: 'ice-cream-sells', dataName: 'Ice Cream Sells'}
    ];

    ChartData.load('main', 'My Sells');
    vm.comparableCharts.forEach(function(comparableChartsItem) {
      ChartData.load(comparableChartsItem.identifier, comparableChartsItem.dataName);
    });

    vm.addNewChart = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);
    }

    vm.addChart = function(category) {
      ChartData.load('main', category);
    };
  }
})();
