var Type = require('./Entity/Type');
var Point = require('./Entity/Point');

var Get = function(storage, api) {
    this.storage = storage;
    this.api = api;
}

Get.prototype.execute = function(id, callback) {
    var callback = callback || function(){};
    var self = this;
    var noResult = {"status" : "No Result"};
    
    this.storage
        .setTable(Point.prototype.ALIAS)
        .setFilter('dataTypeId', id)
        .get(function(error, result) {
       
        result.toArray(function(error, resultPoint) { 
            if(error || !resultPoint[0]) {
                callback(error || noResult);
                return;
            }

            self.storage
                .setTable(Type.prototype.ALIAS)
                .setFilter('id', id)
                .get(function(error, result) {
                result.toArray(function(error, resultType) { 
                    if(error || !resultType[0]) {
                        callback(error || noResult);
                        return;
                    }

                    api.getProjection(resultPoint, function(projected) {
                        resultWithProjected = resultPoint.concat(projected);
                        resultType[0].points = resultWithProjected;
                        callback(null, resultType[0]);
                    });
                });
            });
        });

    });
}

module.exports = Get;
