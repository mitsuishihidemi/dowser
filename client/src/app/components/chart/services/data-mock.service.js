(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('ChartDataMock', ChartDataMock);

  /** @ngInject */
  function ChartDataMock() {
    var count = 0;

    return {
      get: get
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function get(category) {
      var obj = [
        {
          category: 'My Sells',
          unit: 'k',
          data: [
            { date: 1455365898000, value: 124 },
            { date: 1455452328000, value: 225 },
            { date: 1455538746000, value: 223 },
            { date: 1455625156000, value: 125 },
            { date: 1455711574000, value: 126 },
            { date: 1455711584000, value: 200 },
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
        },
        {
          category: 'Ice Cream Sells',
          data: [
            { date: 1455365898000, value: getRandomInt(50, 380) },
            { date: 1455452328000, value: getRandomInt(50, 380) },
            { date: 1455538746000, value: getRandomInt(50, 380) },
            { date: 1455625156000, value: getRandomInt(50, 380) },
            { date: 1455711574000, value: getRandomInt(50, 380) },
            { date: 1455797998000, value: getRandomInt(50, 380) },
            { date: 1455884411000, value: getRandomInt(50, 380) },
            { date: 1455974425000, value: getRandomInt(50, 380) },
            { date: 1456057242000, value: getRandomInt(50, 380) },
            { date: 1456143657000, value: getRandomInt(50, 380) },
            { date: 1456230069000, value: getRandomInt(50, 380) },
            { date: 1456316481000, value: getRandomInt(50, 380) },
            { date: 1456402893000, value: getRandomInt(50, 380) },
            { date: 1456489323000, value: getRandomInt(50, 380) },
            { date: 1456575735000, value: getRandomInt(50, 380) }
          ]
        },
        {
          category: 'Weather',
          unit: 'ºC',
          data: [
            { date: 1455365898000, value: getRandomInt(14, 33) },
            { date: 1455452328000, value: getRandomInt(14, 33) },
            { date: 1455538746000, value: getRandomInt(14, 33) },
            { date: 1455625156000, value: getRandomInt(14, 33) },
            { date: 1455711574000, value: getRandomInt(14, 33) },
            { date: 1455797998000, value: getRandomInt(14, 33) },
            { date: 1455884411000, value: getRandomInt(14, 33) },
            { date: 1455974425000, value: getRandomInt(14, 33) },
            { date: 1456057242000, value: getRandomInt(14, 33) },
            { date: 1456143657000, value: getRandomInt(14, 33) },
            { date: 1456230069000, value: getRandomInt(14, 33) },
            { date: 1456316481000, value: getRandomInt(14, 33) },
            { date: 1456402893000, value: getRandomInt(14, 33) },
            { date: 1456489323000, value: getRandomInt(14, 33) },
            { date: 1456575735000, value: getRandomInt(14, 33) }
          ]
        }
      ];

      if (!category) {
        return obj;
      }

      obj = obj.filter(function(data) {
        return data.category === category;
      })[0];

      obj.category = obj.category + ' ' + ++count;
      return obj;
    }
  }
})();
