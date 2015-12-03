'use strict';

module.exports = function() {
  var db_address = process.env.DB_PORT_27017_TCP_ADDR || 'localhost';
  var db_port    = process.env.DB_PORT_27017_TCP_PORT || 27017;
  return {'url' : 'mongodb://' + db_address + ':' + db_port + '/emberTodo'};
};