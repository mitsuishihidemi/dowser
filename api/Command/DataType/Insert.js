var Type = require('./Entity/Type');

var Insert = function(storage) {
    this.storage = storage;
}

Insert.prototype.execute = function(data, callback) {
    var callback = callback || function(){};
    this.type = new Type(data);

    var error = this.type.getError();
    if(error) {
         callback(error);
    }

    storage.table(this.type.name).data(this.type.get()).save(function(result){
        var points = this.type.getPoints();

        for(var i = 0; i < points.length; i++){
            var point = points[i];
            point.setDataTypeId(result.generated_keys[0]);

            storage.table(point.name).data(point.get()).save(callback);
        }
    });
}

module.exports = Insert;
