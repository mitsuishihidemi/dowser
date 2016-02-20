
var Point = function(data) {
    this.data = data;
    this.error = [];
    this.validate();
}

Point.prototype.validate = function() {
    
    var validPoints = true;
    for(var i = 0; i < this.data.length; i++) {
        var point = this.data[i];
        if(!point['date'] || !point['value']){
            validPoints = false;
        }
    }

    if(!validPoints) {
        this.error.push('All fields of array of points need a date and value fields');
    }
}

Point.prototype.getErrors = function() {
    if(!this.error[0]){
        return false;
    }

    return this.error;

}

Point.prototype.setDataTypeId = function(dataTypeId) {
    this.data.dataTypeId = dataTypeId;
}

Point.prototype.get = function() {
    return this.data;
}

module.exports = Point;
