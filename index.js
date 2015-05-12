var app = require('./server/server.js');

app.listen(app.get('port'));

console.log('Listening on ', app.get('port'));
