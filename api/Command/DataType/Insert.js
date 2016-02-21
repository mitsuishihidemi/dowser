var Type = require('./Entity/Type');

var Insert = function(storage) {
    this.storage = storage;
}

Insert.prototype.execute = function(data, callback) {
    var callback = callback || function(){};
    var self = this;

    this.type = new Type(data);

    var error = this.type.getErrors();
    if(error) {
         callback(error);
    }

    this.storage.setTable(this.type.ALIAS).setData(this.type.get()).save(function(error, result){
        var points = self.type.getPoints();
        console.log(error, result);
        for(var i = 0; i < points.length; i++){
            var point = points[i];
            point.setDataTypeId(result.generated_keys[0]);
            
            self.storage.setTable(point.ALIAS).setData(point.get()).save(callback);
        }
    });
}

module.exports = Insert;
