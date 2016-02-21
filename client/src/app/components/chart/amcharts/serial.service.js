(function() {
  'use strict';

  angular
    .module('dowser')
    .factory('AmChartSerial', AmChartSerialService);

  /** @ngInject */
  function AmChartSerialService(AmChartFormats) {
    function AmChartSerial() {
      return {
        "type": "serial",
        "colors": AmChartFormats.linesColorPallet,
        "creditsPosition": "bottom-right",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD",
        "angle": 21,
        "addClassNames": true,
        "fontFamily": "sans-serif",
        "fontSize": 13,
        "theme": "dark",
        "categoryAxis": {
          "boldPeriodBeginning": false,
          "firstDayOfWeek": 0,
          "parseDates": true,
          "axisThickness": 0,
          "gridThickness": 0,
          "equalSpacing": true,
          "guides": [
            {
              "date": moment().format('YYYY-MM-DD'),
              "lineColor": "#CCCCCC",
              "lineAlpha": 0.3,
              "lineThickness": 2,
              "dashLength": AmChartFormats.dashLength
            }
          ]
        },
        "chartCursor": {
          "enabled": true,
          "balloonPointerOrientation": "horizontal",
          "cursorPosition": "mouse",
          "bulletSize": 5,
          "animationDuration": 0.3,
          "categoryBalloonDateFormat": "MMM DD",
          "graphBulletSize": 0
        },
        "trendLines": [],
        "guides": [],
        "allLabels": [],
        "balloon": {},
        "legend": {
          "enabled": true,
          "useGraphSettings": true,
          "valueText": ""
        },
        "titles": []
      };
    }

    return AmChartSerial;
  }
})();
