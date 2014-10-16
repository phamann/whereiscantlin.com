var app = require('koa')();
var resolve = require('path').resolve

var dist = resolve(__dirname + '/dist');
var fileServerOptions = {
	root: dist,
	index: true,
	maxage: 1000 * 60 * 60 * 24 * 7
};
var port = process.env.PORT || 3000;

console.log(dist);
 
app.use(require('koa-logger')()) 
app.use(require('koa-compress')());
app.use(require('koa-file-server')(fileServerOptions));

app.listen(port);

console.log('Listening on port: ' + port);