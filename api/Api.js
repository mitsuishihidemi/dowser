var http = require("http");

var Api = function(host, port) {
    this.host = host;
    this.port = port;
}

Api.prototype.getProjection = function(points, callback) {
    var self = this;
    var parsedPoints = self.parseToApi(points);
    
    self.call(parsedPoints, function(projectedPoints){
        projectedPoints = self.parseToData(projectedPoints);
console.log(projectedPoints);
        callback(projectedPoints);
    });
}

Api.prototype.parseToApi = function(points) {

    var parsed = [];
    var point;

    for(var i = 0; i < points.length; i++) {
        var point = points[i];

        parsed[i] = point.value * 1;
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
            "value" : points[i]
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
        "hostname": this.host,
        "port": this.port,
        "path": "/",
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

module.exports = Api;
