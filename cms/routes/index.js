var express = require('express');
var router = express.Router();
var connection=require('../db');
var check_permission=require('../access_control.js');
/* GET home page. */
router.get('/',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="HOME";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    },function(req, res, next) {
    console.log("hey");
    
  res.render('index', { title: 'Express'});
});

router.get('/course',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="COURSE";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    }, function(req, res, next) {
    res.render('course', { title: 'Express' });
});

router.get('/about',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="ABOUT";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    }, function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="CONTACT";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    }, function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/services', function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="SERVICES";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    },function(req, res, next) {
    res.render('services', { title: 'Express' });
});



router.post('/search',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="SEARCH";
    var action="write";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    }, function(req, res, next) {

    connection.query(" SELECT * from (SELECT * FROM COURSE WHERE Course_Title like ?)A INNER JOIN INSTRUCTOR ON A.Instructor_id=INSTRUCTOR.Instructor_id",'%'+req.body.search+'%',function(err1,courses){
        if(err1) {
          
            console.log(err1);
        }
        else {
         res.render('search',{courses : courses});
        }
});
});


router.get('/search/instructor/:id', function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="SEARCH_INST";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    },function(req, res, next) {
   
    connection.query(" SELECT * from INSTRUCTOR WHERE Instructor_id= ? ",req.params.id,function(err1,row){
        if(err1) {
          
            console.log(err1);
        }
        else {
            res.render('search/instructor', { instructor: row[0] });
        }
});
    
});

router.get('/search/course/:id',function(req,res,next){
    var id=-1;
    if(req.user)
    id=req.user;
    var object="SEARCH_COURSE";
    var action="read";
    connection.query("SELECT * FROM ROLES WHERE User_id = ?",id ,function(err2,rows3){
    if(err2) {
        console.log(err2);
    }
    else {
        connection.query("SELECT * FROM P ",function(err2,rows4){
            if(err2) {
                console.log(err2);
            }
            else {
                connection.query("SELECT * FROM RP" ,function(err2,rows5){
                    if(err2) {
                        console.log(err2);
                    }
                    else {

                        connection.query("SELECT * FROM H" ,function(err2,rows6){
                            if(err2) {
                                console.log(err2);
                            }
                            else {
        
                                  
        
                                check=check_permission(rows3,object,action,rows4,rows5,rows6);
                                if(check==1)
                                    {
                                    next();
                                    }
                                    else res.send("Access to page denied");
                            }
                            });

                       
                    }
                    });
            }
            });
    }
    });

    }, function(req, res, next) {
   
    connection.query(" SELECT * from COURSE WHERE Course_id= ? ",req.params.id,function(err1,row){
        if(err1) {
          
            console.log(err1);
        }
        else {
            res.render('search/course', { course: row[0] });
        }
});
    
});


module.exports = router;
