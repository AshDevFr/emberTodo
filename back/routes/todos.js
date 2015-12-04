var express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose'),
    Todo     = require('../models/todos.js');


module.exports = function() {
  router.get('/', function(req, res, next) {
    Todo.find(function(err, todos) {
      if (err) return next(err);
      res.json({
        todos : todos
      });
    });
  });

  router.get('/:id', function(req, res, next) {
    Todo.findById(req.params.id, function(err, todo) {
      if (err) return next(err);
      res.json({
        todo : todo
      });
    });
  });

  router.post('/', function(req, res, next) {
    Todo.create(req.body.todo, function(err, todo) {
      if (err) return next(err);
      res.json({
        todo : todo
      });
    });
  });

  router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body.todo, {new: true}, function(err, todo) {
      if (err) return next(err);
      res.json({
        todo : todo
      });
    });
  });

  router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function(err, todo) {
      if (err) return next(err);
      res.json({
        todo : todo
      });
    });
  });

  return router;
};