(function() {
  'use strict';

  angular
    .module('dowser')
    .controller('ImporterController', ImporterController);

  ImporterController.$inject = ['$rootScope', '$timeout', '$state', '$stateParams', 'Api', 'DataGenerator'];

  /** @ngInject */
  function ImporterController($rootScope, $timeout, $state, $stateParams, Api, DataGenerator) {
    var vm = this;
    var comment = '// This is just an Example data\n';
    var generatedData = DataGenerator.generate($stateParams);

    vm.data = {
      dataForImport: addPrefixComment(generatedData)
    };

    vm.aceSettings = {
      showGutter: false,
      theme:'twilight',
      mode: 'json',
      firstLineNumber: 5
    };

    vm.next = function() {
      $rootScope.$emit('wizard:progress');
      $timeout(importerData, 500);
    };

    function importerData() {
      var data = removePrefixComment(vm.data.dataForImport);
      Api.post('importer', data, function() {
        $rootScope.$emit('wizard:progress');
        $state.go('wizard.agreement');
      });
    }

    function addPrefixComment(data) {
      var stringfyData = angular.toJson(data, 2);
      return comment.concat(stringfyData);
    }

    function removePrefixComment(stringfyData) {
      var data = stringfyData.replace(comment, '');
      return angular.fromJson(data);
    }
  }
})();
