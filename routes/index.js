
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {};
  data.env = env;
  res.render('index', data);
};


exports.data = require('./data');
