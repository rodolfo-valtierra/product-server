const mysql = require('mysql2');
const config = require('./config');

try {
  const poolConnection =  mysql.createPool(config);

  module.exports = poolConnection;
}catch (e){
    module.exports = []
  }

