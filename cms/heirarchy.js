var permissions=require('./permissions.js');

let H = {
    Instructor: {
        children: []
    },
    Student2: {
        children: ['Student']
    },
    Student3: {
        children: ['Student']
    },
    Student4: {
        children: ['Student2','Student3']
    },
    Student: {
        children: []
    },
    Assistant: {
        children: []
    },
    Guest: {
        children: []
    },
    HOD:{
        children: ['Instructor']
    },
    CR:{
        children: []
    }
}

module.exports=H;