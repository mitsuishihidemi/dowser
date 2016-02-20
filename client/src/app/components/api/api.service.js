(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout) {

    return {
      get: get,
      post: post
    };

    function get(endpoint, callback) {
      console.log('get', endpoint);
      $timeout(callback, 1000);
    }

    function post(endpoint, parameters, callback) {
      console.log('post', endpoint, parameters);
      $timeout(callback, 1000);
    }
  }
})();
