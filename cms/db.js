var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dpsp1191',
    database : 'db'
  });
  
connection.connect(function(err) {
    if (err) throw err;
     
      console.log('You are now connected...');
    });

module.exports = connection;