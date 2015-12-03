(function() {
  'use strict';
  var express     = require('express'),
      server      = express(),
      bodyParser = require('body-parser'),
      port        = process.env.PORT || 4210,
      routesTodos = require('./routes/todos')(),
      mongoose    = require('mongoose'),
      configDB = require('./config/database')();


  mongoose.connect(configDB.url, function(err) {
    if (err) {
      console.log('connection error', err);
    } else {
      console.log('connection successful');
    }
  });

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
  });

  server.use('/api/todos', routesTodos);

  server.use(function(req, res, next) {
    var err    = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  server.listen(port, function() {
    console.log('server listening on port ' + port);
  });
})();
