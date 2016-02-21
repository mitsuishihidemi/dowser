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
      { dataName: 'Weather'},
      { dataName: 'Ice Cream Selling'},
      { dataName: 'Economic Crisis'},
      { dataName: 'Birth of Children' }
    ];

    ChartData.load('My Sells');

    vm.addNewChart = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);
    }

    vm.addChart = function(category) {
      ChartData.load(category);
    };
  }
})();
