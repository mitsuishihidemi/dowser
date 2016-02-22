(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, $state, ChartData, User, $rootScope) {
    var vm = this;

    vm.inputSearch = '';
    vm.mainChart = {};
    vm.chartList = [];
    vm.comparableCharts = [];

    vm.loadMyChart = function() {
      ChartData.load(vm.mainChart.id);
    };

    vm.loadComparableCharts = function() {
      vm.comparableCharts.forEach(function(comparableChartsItem, index) {
        $timeout(function() {
          ChartData.load(comparableChartsItem.id);
        }, 3000 * index);
      });
    };

    vm.addNewChart = function() {
      $timeout(function () {
        $state.go('wizard.register');
      }, 500);
    };

    vm.setMainChart = function(chart) {
      vm.mainChart = false;
      $timeout(function() {
        vm.mainChart = chart;
        vm.loadMyChart();
      }, 500);
    };

    vm.createMerge = function() {
      $rootScope.$emit('chart:' + vm.mainChart.id + ':merge');
    };

    vm.addChart = function(chart) {
      ChartData.loadOn(vm.mainChart.id, chart.id);
    };

    vm.initialize = function() {
      User.loadData().then(function() {
        vm.chartList = User.myData;
        vm.comparableCharts = User.notMyData;
        vm.mainChart = vm.chartList[0];
        vm.loadMyChart();
        vm.loadComparableCharts();
      });
    };

    vm.initialize();
  }
})();
