var roles=require('./policy.js');
function sendvalue(role,object)
{ 
   console.log('checking for permission '+object);
   return roles[role] && roles[role].can.indexOf(object) !== -1;
  
}
module.exports =sendvalue;