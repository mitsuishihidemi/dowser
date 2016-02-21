var Type = require('./Entity/Type');
var Point = require('./Entity/Point');

var GetByUser = function(storage) {
    this.storage = storage;
}

GetByUser.prototype.execute = function(id, callback) {
    var callback = callback || function(){};
    var self = this;
    var noResult = {"status" : "No Result"};
    
    this.storage
        .setTable(Type.prototype.ALIAS)
        .setFilter('userId', id)
        .get(function(error, result) {
       
        result.toArray(function(error, resultType) { 
            if(error || !resultType[0]) {
                callback(error || noResult);
                return;
            }

            callback(resultType);
        });
    });
}
module.exports = GetByUser;
