const emoji = require('node-emoji');
const restify = require('restify');

// Server setup, handle query and form params
const server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Path handlers
function translate(input) {
    return emoji.emojify(input);
}

function respond(req, res, next) {
  res.send({translated: translate(req.params.q)});
    next();
}

server.get('/aaw', respond);
server.post('/aaw', respond);

const EmojiService = {
  start: port => {
    // Setup server
    server.listen(port, function () {
      console.log('EmojiService (%s-%s) listening at %s', emoji.get('horse'), emoji.get('fish'), server.url);
    });
  }
};

EmojiService.start(1313);

module.exports = EmojiService;
