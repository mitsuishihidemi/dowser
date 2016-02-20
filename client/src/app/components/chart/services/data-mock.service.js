(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartDataMock', ChartDataMock);

  /** @ngInject */
  function ChartDataMock() {

    return {
      get: get
    };

    function get() {
      return [
        {
          description: 'Ice Cream Sells',
          data: {
            1455365898: 100,
            1455452328: 80,
            1455538746: 120,
            1455625156: 110,
            1455711574: 150,
            1455797998: 180,
            1455884411: 220,
            1455974425: 250,
            1456057242: 260,
            1456143657: 265,
            1456230069: 280,
            1456316481: 270,
            1456402893: 275,
            1456489323: 270,
            1456575735: 280
          }
        },
        {
          description: 'Weather',
          data: {
            1455365898: 24,
            1455452328: 25,
            1455538746: 23,
            1455625156: 25,
            1455711574: 26,
            1455797998: 28,
            1455884411: 28,
            1455974425: 29,
            1456057242: 30,
            1456143657: 30,
            1456230069: 32,
            1456316481: 33,
            1456402893: 31,
            1456489323: 33,
            1456575735: 32
          }
        }
      ];
    }

  }
})();
