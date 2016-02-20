var rethinkdb = require('rethinkdb');

var Storage = function(host, port, db) {
    this.host = host;
    this.port = port;
    this.db = db;
    this.connect();
}

Storage.prototype.connect = function() {
    var self = this;
    rethinkdb.connect({
        host: this.host,
        port: this.port,
        authKey: '',
        db: this.db
    }, function(error, connection) { self.setConnection(error, connection); } );
}

Storage.prototype.setConnection = function(error, connection) {
     if (error) throw error;
    this.connection = connection;
}

Storage.prototype.setTable = function(tableName) {
    this.table = tableName;
    return this;
}

Storage.prototype.setData = function(data) {
    this.data = data;
    return this;
}

Storage.prototype.save = function(callback) {
    rethinkdb
        .db(this.db)
        .table(this.table)
        .insert(this.data)
        .run(this.connection, callback);
}

module.exports = Storage;
