(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('ImporterController', ImporterController);

  ImporterController.$inject = ['$state', 'Api'];

  /** @ngInject */
  function ImporterController($state, Api) {
    var vm = this;

    vm.data = {
      dataForImport: ''
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
