(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout, $http) {

    var url = 'http://158.85.199.5:3002/';

    return {
      __get: __get,
      get: get,
      post: post
    };

    function __get(endpoint) {
      return new Promise(function(resolve, reject) {
        console.log('Getting: ' + url + endpoint);
        $timeout(resolve, 2000);
      });
    }

    function get(endpoint) {
      var settings = {
        url: url + endpoint,
        method: 'GET'
      };

      return $http(settings);
    }

    function post(endpoint, data) {
      var settings = {
        url: url + endpoint,
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        json: data
      };

      return $http(settings);
    }
  }
})();
