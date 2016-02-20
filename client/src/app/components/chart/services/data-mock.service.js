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

    function get(category) {
      var obj = [
        {
          category: 'Ice Cream Sells',
          data: [
            { date: 1455365898000, value: 100 },
            { date: 1455452328000, value: 80 },
            { date: 1455538746000, value: 120 },
            { date: 1455625156000, value: 110 },
            { date: 1455711574000, value: 150 },
            { date: 1455797998000, value: 180 },
            { date: 1455884411000, value: 220 },
            { date: 1455974425000, value: 250 },
            { date: 1456057242000, value: 260 },
            { date: 1456143657000, value: 265 },
            { date: 1456230069000, value: 280 },
            { date: 1456316481000, value: 270 },
            { date: 1456402893000, value: 275 },
            { date: 1456489323000, value: 270 },
            { date: 1456575735000, value: 280 }
          ]
        },
        {
          category: 'Weather',
          data: [
            { date: 1455365898000, value: 24 },
            { date: 1455452328000, value: 25 },
            { date: 1455538746000, value: 23 },
            { date: 1455625156000, value: 25 },
            { date: 1455711574000, value: 26 },
            { date: 1455797998000, value: 28 },
            { date: 1455884411000, value: 28 },
            { date: 1455974425000, value: 29 },
            { date: 1456057242000, value: 30 },
            { date: 1456143657000, value: 30 },
            { date: 1456230069000, value: 32 },
            { date: 1456316481000, value: 33 },
            { date: 1456402893000, value: 31 },
            { date: 1456489323000, value: 33 },
            { date: 1456575735000, value: 32 }
          ]
        },
        {
          category: 'My Sells',
          data: [
            { date: 1455365898000, value: 124 },
            { date: 1455452328000, value: 225 },
            { date: 1455538746000, value: 223 },
            { date: 1455625156000, value: 125 },
            { date: 1455711574000, value: 126 },
            { date: 1455797998000, value: 228 },
            { date: 1455884411000, value: 128 },
            { date: 1455974425000, value: 129 },
            { date: 1456057242000, value: 130 },
            { date: 1456143657000, value: 30 },
            { date: 1456230069000, value: 132 },
            { date: 1456316481000, value: 133 },
            { date: 1456402893000, value: 231 },
            { date: 1456489323000, value: 233 },
            { date: 1456575735000, value: 122 }
          ]
        }
      ];

      return obj.filter(function(data) {
        return data.category === category;
      })[0];
    }
  }
})();
