var restify = require('restify');

var Server = function(commandFactory) {
    this.commandFactory = commandFactory;
    this.create();
    this.setupCors();
    this.addUses();
    this.addRoutes();
}

Server.prototype.create = function() {
    this.server = restify.createServer({
        name: 'myapp',
        version: '1.0.0'
    });
}

Server.prototype.setupCors = function() {
    this.server.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
};

Server.prototype.addUses = function() {
    this.server.use(restify.acceptParser(this.server.acceptable));
    this.server.use(restify.queryParser());
    this.server.use(restify.bodyParser());
}

Server.prototype.addRoutes = function() {
    var self = this;
    this.server.post('/' + this.commandFactory.ROUTE_DATA_TYPE_INSERT, function (req, res, next) {
        var insertCommand = self.commandFactory.create(self.commandFactory.ROUTE_DATA_TYPE_INSERT);

        insertCommand.execute(req.params, function(error, data){
           res.send(error || data);
        });

        return next();
    });

    this.server.get('/' + this.commandFactory.ROUTE_DATA_TYPE_GET + "/:id", function (req, res, next) {
        var getCommand = self.commandFactory.create(self.commandFactory.ROUTE_DATA_TYPE_GET);

        getCommand.execute(req.params.id, function(error, data){
            res.send(error || data);
        });

        return next();
    });

    this.server.get('/' + this.commandFactory.ROUTE_DATA_TYPE_GET_BY_USER + "/:id", function (req, res, next) {
        var getCommand = self.commandFactory.create(self.commandFactory.ROUTE_DATA_TYPE_GET_BY_USER);

        getCommand.execute(req.params.id, function(error, data){
            res.send(error || data);
        });

        return next();
    });

    this.server.get('/' + this.commandFactory.ROUTE_DATA_TYPE_GET_BY_NOT_USER + "/:id", function (req, res, next) {
        var getCommand = self.commandFactory.create(self.commandFactory.ROUTE_DATA_TYPE_GET_BY_NOT_USER);

        getCommand.execute(req.params.id, function(error, data){
            res.send(error || data);
        });

        return next();
    });

}

Server.prototype.start = function(port) {
    var self = this;
    this.server.listen(port, function () {
          console.log('%s listening at %s', self.server.name, self.server.url);
    });
}

module.exports = Server;
