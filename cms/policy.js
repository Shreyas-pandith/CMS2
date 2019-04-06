var permissions=require('./permissions.js');

let RP = {
    Instructor: {
        permissions: ['P1']
    },
    Student1: {
        permissions: ['P1']
    },
    Assistant: {
        permissions: ['P1']
    },
    Guest: {
        permissions: ['P1']
    },
    HOD:{
        permissions: ['P1','P3']
    }
}
module.exports=RP;