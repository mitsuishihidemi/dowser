var Point = require('./Point');


var Type = function(data) {
    this.data = data;
    this.error = [];
    this.points = [];
    this.validate();
    this.createPoints();
}

Type.prototype.validate = function() {
    
    if(!this.data['name']) {
        this.error.push('Need a name');
    }
    
    if(!this.data['kind']) {
        this.error.push('Need a name');
    }
    
    if(!this.data['userId']) {
        this.error.push('Need a userId');
    }

    if(!this.data['points'][0] ) {
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
        'name' : this.data['name'],
        'kind' : this.data['kind'],
        'userId' : this.data['userId'],
    };

}

Type.prototype.createPoints = function() {
    var point;

    for(var i = 0; i < this.data['points'].length; i++) {
        point = new Point(this.data['points'][i]);
        
        if(point.getErrors()) {
            this.errors = this.errors.concat(point.getErrors());
        }
        
        this.points.push(point);
    }
}

Type.prototype.getPoints = function() { 
    return this.points;
}

module.exports = Type;
