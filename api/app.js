var CommandFactory = require('./CommandFactory'),
    Server = require('./Server');
    Storage = require('./Storage'),
    Api = require('./Api');

var api = new Api('158.85.206.13', 8003);
var storage = new Storage('158.85.206.13', 28015, 'dowser');
var commandFactory = new CommandFactory(storage, api);
var server = new Server(commandFactory);

server.start(8081);
