var DataTypeInsert = require('./Command/DataType/Insert');
var DataTypeGet = require('./Command/DataType/Get');

var CommandFactory = function(storage) {
    this.storage = storage;
    this.commands = {}; 
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_INSERT] =  DataTypeInsert;
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_GET] =  DataTypeGet;
    //this.commands[CommandFactory.ROUTE_DATA_TYPE_UPDATE] =  DataTypeUpdate;
}

CommandFactory.prototype.ROUTE_DATA_TYPE_INSERT = 'DataType/Insert';
CommandFactory.prototype.ROUTE_DATA_TYPE_GET = 'DataType/Get';

CommandFactory.prototype.create = function(command) {
    if(this.commands[command]) {
         return new this.commands[command](this.storage); 
    }

    throw new Error("Command not exist"); 
}

module.exports = CommandFactory;
