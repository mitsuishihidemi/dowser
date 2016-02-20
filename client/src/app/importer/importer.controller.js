(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('ImporterController', ImporterController);

  ImporterController.$inject = ['$state', '$stateParams', 'Api', 'DataGenerator'];

  /** @ngInject */
  function ImporterController($state, $stateParams, Api, DataGenerator) {
    var vm = this;

    vm.data = {
      dataForImport: DataGenerator.generate($stateParams)
    };

    vm.aceSettings = {
      showGutter: false,
      theme:'twilight',
      mode: 'json',
      firstLineNumber: 5
    };

    vm.next = function() {
      Api.post('importer', vm.data, function() {
        $state.go('agreement');
      });
    };

  }
})();
