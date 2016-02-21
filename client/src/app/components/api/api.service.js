(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout, $http, $log) {

    var url = 'http://158.85.199.5:8081/';
    var urlMerge = 'http://158.85.206.13:8002/';

    return {
      __get: __get,
      get: get,
      post: post,
      merge: merge
    };

    function __get(endpoint) {
      return new Promise(function(resolve) {
        $log.info('Getting: ' + url + endpoint);
        $timeout(resolve, 2000);
      });
    }

    function get(endpoint) {
      return $http.get(url + endpoint);
    }

    function post(endpoint, data) {
      return $http.post(url + endpoint, data);
    }

    function merge(data) {
    }
  }
})();
