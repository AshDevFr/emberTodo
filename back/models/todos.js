var mongoose   = require('mongoose'),
    TodoSchema = new mongoose.Schema({
      title       : String,
      isDone      : Boolean
    });

module.exports = mongoose.model('todo', TodoSchema);