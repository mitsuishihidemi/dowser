var DataTypeInsert = require('./Command/DataType/Insert');
var DataTypeGet = require('./Command/DataType/Get');
var DataTypeGetByUser = require('./Command/DataType/GetByUser');
var DataTypeGetByNotUser = require('./Command/DataType/GetByNotUser');

var CommandFactory = function(storage, api) {
    this.storage = storage;
    this.api = api;
    
    this.commands = {}; 
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_INSERT] =  DataTypeInsert;
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_GET] =  DataTypeGet;
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_GET_BY_USER] =  DataTypeGetByUser;
    this.commands[CommandFactory.prototype.ROUTE_DATA_TYPE_GET_BY_NOT_USER] =  DataTypeGetByNotUser;
}

CommandFactory.prototype.ROUTE_DATA_TYPE_INSERT = 'DataType/Insert';
CommandFactory.prototype.ROUTE_DATA_TYPE_GET = 'DataType/Get';
CommandFactory.prototype.ROUTE_DATA_TYPE_GET_BY_USER = 'DataType/GetByUser';
CommandFactory.prototype.ROUTE_DATA_TYPE_GET_BY_NOT_USER = 'DataType/GetByNotUser';

CommandFactory.prototype.create = function(command) {
    if(this.commands[command]) {
         return new this.commands[command](this.storage, this.api); 
    }

    throw new Error("Command not exist"); 
}

module.exports = CommandFactory;
