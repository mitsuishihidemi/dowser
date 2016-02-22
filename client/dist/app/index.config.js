(function() {
  'use strict';

  angular
    .module('dowser')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    Array.prototype.shuffle = function() {
      var i = this.length, j, temp;
      if ( i == 0  ) return this;
      while ( --i  ) {
        j = Math.floor( Math.random() * ( i + 1  )  );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
      return this;
    };
  }

})();
