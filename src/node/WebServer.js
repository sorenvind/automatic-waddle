const restify = require('restify');

// Server setup, handle query and form params
const server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Path handlers
server.get(/.*/, restify.serveStatic({
  directory: path.join(__dirname, '../browser/build')
}));

const WebServer = {
  start: port => {
    // Setup server
    server.listen(port, function () {
      console.log('webserver listening at %s', server.url);
    });
  }
};

module.exports = WebServer;
