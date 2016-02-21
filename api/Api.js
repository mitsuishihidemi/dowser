var http = require("http");

var Api = function() {

}

Api.prototype.getProjection = function(points, callback) {
    var self = this;
    var parsedPoints = self.parseToApi(points);
    
    self.call(parsedPoints, function(projectedPoints){
        projectedPoints = self.parseToData(projectedPoints);

        callback(projectedPoints);
    });
}

Api.prototype.parseToApi = function(points) {

    var parsed = [];
    var point;

    for(var i = 0; i < points.length; i++) {
        var point = points[i];

        parsed[i] = point.value;
    }

    return parsed;

}

Api.prototype.parseToData = function(points) {

    var parsed = [];
    var point;
    var dateFuture = (new Date).getTime();
    var interval = 1000 * 60 * 60 * 24;

    for(var i = 0; i < points.length; i++) {
        var point = {
            "date" : dateFuture,
            "value" : point[i];
        }

        parsed[i] = point;
        dateFuture = dateFuture + interval;
    }

    return parsed;
}

Api.prototype.call = function(points, callback) {
    var bodyCall = {
        "data" : points,
        "window" : 7
    };

    var options = {
        "method": "POST",
        "hostname": "158.85.206.13",
        "port": "8003",
        "path": "/DataType/Get/8a2cefdf-23a7-40ae-a6ac-209a1c2b0ed0",
        "headers": {
            "cache-control": "no-cache",
            "content-type": "application/json"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            var result = JSON.parse(body.toString());

            callback(result);
        });
    });

    req.write(JSON.stringify(bodyCall));
    req.end();
}
