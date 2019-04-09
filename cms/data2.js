var mysql = require('mysql');
var db;
var RP=require('./policy.js');
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
   
                for(i=0;i<RP["Instructor"].permissions.length;i++)
                {   var userData = {
                    'permission': RP["Instructor"].permissions[i],
                    'role':'Instructor'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
              
                for(j=0;j<RP["Student"].permissions.length;j++)
                {   var userData = {
                    'permission': RP["Student"].permissions[j],
                    'role':'Student'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(k=0;k<RP["Student2"].permissions.length;k++)
                {   var userData = {
                    'permission': RP["Student2"].permissions[k],
                    'role':'Student2'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                } for(l=0;l<RP["Student3"].permissions.length;l++)
                {   var userData = {
                    'permission': RP["Student3"].permissions[l],
                    'role':'Student3'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(m=0;m<RP["Student4"].permissions.length;m++)
                {   var userData = {
                    'permission': RP["Student4"].permissions[m],
                    'role':'Student4'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(n=0;n<RP["Assistant"].permissions.length;n++)
                {   var userData = {
                    'permission': RP["Assistant"].permissions[n],
                    'role':'Assistant'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(o=0;o<RP['CR'].permissions.length;o++)
                {   var userData = {
                    'permission': RP["CR"].permissions[o],
                    'role':'CR'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(p=0;p<RP['Guest'].permissions.length;p++)
                {   var userData = {
                    'permission': RP['Guest'].permissions[p],
                    'role':'Guest'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
                    });
    
                }
                for(q=0;q<RP['HOD'].permissions.length;q++)
                {   var userData = {
                    'permission': RP['HOD'].permissions[q],
                    'role':'HOD'
                             };
                    db.query("INSERT INTO RP SET ?",userData, function(err, results, fields) {
                        if (err) {
                            console.log(err.message);
                        }
                        console.log('Rp');
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