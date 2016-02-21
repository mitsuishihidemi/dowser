(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout, $http) {

    var url = 'http://158.85.199.5:3002/';

    return {
      get: get,
      post: post
    };

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
