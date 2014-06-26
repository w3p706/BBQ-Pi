
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , pkg = require('./package.json')
  , morgan         = require('morgan')      //express logger
  , bodyParser     = require('body-parser')
  , methodOverride = require('method-override')
  , favicon = require('serve-favicon')
  , compression = require('compression')
  , errorhandler = require('errorhandler');


var config = require('./config.js');

var env = {};
env.version = pkg.version;
env.serial = env.version.replace(/\D/g, '');
env.debug = true;
env.mode = process.env.NODE_ENV || 'development';

config.package = pkg;

var app = express();

app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 				// simulate DELETE and PUT
app.use(compression());

// development only
if ('development' == env.mode) {
  app.use(errorhandler());
  app.locals.pretty = true;
  env.debug = true;
}

var oneDay = 86400000;

app.use(path.join(config.server.staticBasePath, config.package.version), express.static(path.join(__dirname, config.server.distFolder), { maxAge: oneDay }));
app.use(config.server.staticBasePath, express.static(path.join(__dirname, config.server.distFolder), { maxAge: oneDay }));
app.use('/', express.static(path.join(__dirname, config.server.distFolder), { maxAge: oneDay }));


app.route('/getdata').get(routes.data.getData);

app.listen(process.env.PORT || config.server.port || 3000 );
console.log('Magic happens on port 3000'); 			// shoutout to the user



