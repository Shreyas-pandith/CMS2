/*var RP=require('./policy.js');
var permissions=require('./permissions.js');
var connection=require('./db.js'); */
// var H=require('./heirarchy.js');
function sendvalue(rows3,object,action,permissions,RP,H)
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
                         for(j=0;j<H.length;j++)
                         {  
                            if(H[j].role===roles[i])
                            roles.push(H[j].child);
                         }
                     
                        
                      }
                      console.log('roles : '+roles);
                      
                      for(i=0;i<roles.length;i++)
                      { role=roles[i];
                        
                         for(j=0;j<RP.length;j++){
                           // console.log(RP[j].role+" "+RP[j].permission);
                           // console.log(role+" "+permission.permission);
                              if(RP[j].role===role && RP[j].permission ===permission.permission)
                               {
                                 console.log("yes");
                                 return 1;
                               }
                           }
                        // if(RP[roles[i]] && RP[roles[i]].permissions.indexOf(permission.permission) != -1)
                        // {
                        
                        //   console.log("yes");
                        //   return 1;
                        // }
                        
                        
                      }
                      console.log("no");
                      return 0;
                     
                     
              

       
   // console.log('checking for permission '+object);
   // return roles[role] && roles[role].can.indexOf(object) !== -1;
  
}
module.exports =sendvalue;