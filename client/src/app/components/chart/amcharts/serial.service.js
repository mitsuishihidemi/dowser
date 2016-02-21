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
        "dataDateFormat": AmChartFormats.date,
        "angle": 21,
        "addClassNames": true,
        "fontFamily": "sans-serif",
        "fontSize": 13,
        "theme": "dark",
        "categoryAxis": {
          "boldPeriodBeginning": false,
          "firstDayOfWeek": 0,
          "parseDates": false,
          "axisThickness": 0,
          "gridThickness": 0,
          "guides": [
            {
              "category": moment().format(AmChartFormats.date),
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
          "bulletSize": 5,
          "categoryBalloonDateFormat": AmChartFormats.date,
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
