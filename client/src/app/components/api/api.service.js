(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('Api', Api);

  /** @ngInject */
  function Api($timeout, $http) {

    var url = 'http://158.85.206.13:8081/';

    return {
      get: get,
      post: post
    };

    function get(endpoint, callback) {
      $timeout(callback, 1000);
    }

    function post(endpoint, data, callback) {
      var settings = {
        async: true,
        crossDomain: true,
        url: url + endpoint,
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'postman-token': '2ac2e3fc-cd42-eb79-2ada-86749b3db8cf',
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      $http(settings).then(callback, errorCallback);
    }

    function errorCallback(e) {
      console.error('Error: ', e);
    }
  }
})();
