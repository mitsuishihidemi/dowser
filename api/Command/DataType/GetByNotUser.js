var Type = require('./Entity/Type');

var GetByNotUser = function(storage) {
    this.storage = storage;
}

GetByNotUser.prototype.execute = function(id, callback) {
    var callback = callback || function(){};
    var self = this;
    var noResult = {"status" : "No Result"};
    
    this.storage
        .setTable(Type.prototype.ALIAS)
        .setFilter('userId', id, false)
        .get(function(error, result) {
       
        result.toArray(function(error, resultType) { 
            if(error || !resultType[0]) {
                callback(error || noResult);
                return;
            }

            callback(null, resultType);
        });
    }, true);
}
module.exports = GetByNotUser;
