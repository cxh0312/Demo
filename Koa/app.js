var app = require('koa')();
var logger = require('koa-logger');

app.use(logger());
app.use(function *(){
	this.body('hello world');
})
app.listen(8000) 