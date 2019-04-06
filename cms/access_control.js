var RP=require('./policy.js');
var permissions=require('./permissions.js');
var connection=require('./db.js');
function sendvalue(rows3,object,action)
{  var roles=[];
   console.log('okj');
  
             
                     if(rows3.length==0)
                     {
                        roles.push("Guest");
                     }
                     else{

                     for (i = 0; i < rows3.length; i++) {
                        roles.push(rows3[i].role);
                     

                      }
                     }
                      var permission;
                      console.log('roles : '+roles);
                     
                     
                      for(i=0;i<permissions.length;i++)
                      { 
                         if(permissions[i].object===object && permissions[i].action===action)
                          {
                             permission=permissions[i];
                          }
                      }
                      console.log(permission.permission)
                      
                      for(i=0;i<roles.length;i++)
                      {
                        if(RP[roles[i]] && RP[roles[i]].permissions.indexOf(permission.permission) != -1)
                        {
                        
                          console.log("yes");
                          return 1;
                        }
                        
                      }
                      console.log("no");
                       return 0;
                     
                     
              

       
   // console.log('checking for permission '+object);
   // return roles[role] && roles[role].can.indexOf(object) !== -1;
  
}
module.exports =sendvalue;