(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartSerial', AmChartSerialService);

  /** @ngInject */
  function AmChartSerialService() {
    function AmChartSerial() {
      return {
        "type": "serial",
        "creditsPosition": "top-right",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD",
        "angle": 21,
        "addClassNames": true,
        "fontFamily": "sans",
        "fontSize": 13,
        "theme": "dark",
        "chartScrollbar": {
          "enabled": true
        },
        "categoryAxis": {
          "boldPeriodBeginning": false,
          "firstDayOfWeek": 0,
          "parseDates": true,
          "axisThickness": 0,
          "gridThickness": 0
        },
        "chartCursor": {
          "enabled": true,
          "balloonPointerOrientation": " vertical",
          "bulletSize": 5,
          "categoryBalloonDateFormat": "MMM DD",
          "graphBulletSize": 0
        },
        "trendLines": [],
        "guides": [],
        "allLabels": [],
        "balloon": {},
        "legend": {
          "enabled": true,
          "useGraphSettings": true
        },
        "titles": []
      };
    }

    return AmChartSerial;
  }
})();
