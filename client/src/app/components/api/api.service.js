(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout) {

    return {
      post: post
    };

    function post(endpoint, parameters, callback) {
      console.log('post', endpoint, parameters);
      $timeout(callback, 1000);
    }
  }
})();
