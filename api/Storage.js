var rethinkdb = require('rethinkdb');

var Storage = function(host, port, db) {
    this.host = host;
    this.port = port;
    this.db = db;

    this.connect();
}

Storage.prototype.connect = function() {
    rethinkdb.connect({
        host: this.host,
        port: this.port,
        authKey: '',
        db: this.db
    }, this.setConnection);
}

Storage.prototype.setConnection = function(connection) {
    this.connection = connection;
}

Storage.prototype.table = function(tableName) {
    this.table = tableName;
    return this;
}

Storage.prototype.data = function(data) {
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
