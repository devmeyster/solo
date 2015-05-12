var express     = require('express'),
    port = process.env.PORT || 8000;

var app = express();

app.use(express.static(__dirname + "../client"));
app.set('port', port);

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

module.exports = app;


