var Point = require('./Point');

var Type = function(data) {
    this.error = [];
    this.points = [];
    this.setData(data);
}

Type.prototype.ALIAS = "dataTypes";

Type.prototype.setData = function(data) {

    this.id = data.id || undefined;
    this.name = data.name || undefined;
    this.kind = data.kind || undefined;
    this.userId = data.userId || undefined;
    this.points = this.createPoints(data.points || []);
    
    this.validate();
}

Type.prototype.validate = function() {
    
    if(!this.name) {
        this.error.push('Need a name');
    }
    
    if(!this.kind) {
        this.error.push('Need a name');
    }
    
    if(!this.userId) {
        this.error.push('Need a userId');
    }

    if(!this.points[0] ) {
        this.error.push('Need a array of points');
    }

}

Type.prototype.getErrors = function() {
    if(!this.error[0]){
        return false;
    }

    return this.error;

}

Type.prototype.get = function() {

    return {
        'name' : this.name,
        'kind' : this.kind,
        'userId' : this.userId
    };

}

Type.prototype.createPoints = function(points) {
    var point;
    var pointsCollection = [];
    for(var i = 0; i < points.length; i++) {
        point = new Point(points[i]);

        if(point.getErrors()) {
            this.error = this.error.concat(point.getErrors());
        }

        pointsCollection.push(point);
    }

    return pointsCollection;
}

Type.prototype.getPoints = function() { 
    return this.points;
}

module.exports = Type;
