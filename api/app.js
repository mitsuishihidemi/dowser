var CommandFactory = require('./CommandFactory'),
    Server = require('./Server');
    Storage = require('./Storage');

var storage = new Storage('127.0.0.1', 28015, 'dowser');
var commandFactory = new CommandFactory(storage);
var server = new Server(commandFactory);

server.start(8081);
