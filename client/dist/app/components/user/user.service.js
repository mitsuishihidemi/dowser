(function() {
  'use strict';

  angular
    .module('dowser')
    .service('User', User);

  /** @ngInject */
  function User($q, $log, Api) {
    var self = this;

    self.id = '007';
    self.username = 'james';
    self.myData = [];
    self.notMyData = [];

    self.loadData = function() {
      return new $q(function(resolve) {
        var promises = []
        promises.push(Api.get('DataType/GetByUser/' + self.username));
        promises.push(Api.get('DataType/GetByNotUser/' + self.username));

        $q.all(promises)
          .then(function(responses) {
            self.myData = responses[0].data;
            self.notMyData = responses[1].data.shuffle().slice(0, 6);

            resolve();
          })
          .catch($log.error);
      });
    }
  }
})();
