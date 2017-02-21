const emoji = require('node-emoji');
const restify = require('restify');

// Server setup, handle query and form params
const server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Path handlers
function translate(input) {
    return emoji.emojify(input);
}

function respond(req, res, next) {
    res.send(translate(req.params.q));
    next();
}

server.get('/aaw', respond);
server.post('/aaw', respond);

// Setup server
server.listen(8080, function () {
    console.log('restify-%s-%s listening at %s', emoji.get('horse'), emoji.get('fish'), server.url);
});
