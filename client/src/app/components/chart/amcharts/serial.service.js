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
        "graphs": [
          {
            "balloonText": "[[value]]un",
            "bullet": "round",
            "dashLengthField": "dashLength",
            "id": "AmGraph-1",
            "lineAlpha": 1,
            "lineThickness": 3,
            "markerType": "square",
            "title": "Ice Cream Sells",
            "valueAxis": "ValueAxis-1",
            "valueField": "Ice Cream Sells"
          },
          {
            "balloonText": "[[value]]ºC",
            "bullet": "round",
            "dashLengthField": "dashLength",
            "fillColorsField": "lineColor",
            "id": "AmGraph-2",
            "lineColorField": "lineColor",
            "lineThickness": 3,
            "title": "Weather",
            "valueAxis": "ValueAxis-2",
            "valueField": "Weather"
          }
        ],
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
