const path = require('path');
const restify = require('restify');

// Server setup, handle query and form params
const server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Path handlers
server.get(/\/.*/, restify.serveStatic({
  directory: path.resolve(__dirname, '../browser/build'),
  default: 'index.html'
}));

const WebServer = {
  start: port => {
    // Setup server
    server.listen(port, function () {
      console.log('webserver listening at %s', server.url);
    });
  }
};

if (require.main === module) {
  WebServer.start(8080);
}
module.exports = WebServer;
