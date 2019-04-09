var mysql = require('mysql');
var db;
var permissions=require('./permissions.js');
function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'dpsp1191',
            database : 'db'
        });

        db.connect(function(err){
            if(!err) {
   
                for(i=0;i<permissions.length;i++)
                {   var userData = {
                    'permission': permissions[i].permission,
                    'object':  permissions[i].object,
                    'action':  permissions[i].action,
                             };
                    db.query("INSERT INTO P SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('User table created');
                    });
    
                }
              
                


               
                

            } else {
                throw err;
            }
        });
    }
    return db;
}

module.exports = connectDatabase();