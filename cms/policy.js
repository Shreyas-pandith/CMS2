let roles = {
    Instructor: {
        can: ['I_HOME_READ', 'I_PROFILE_WRITE', 'I_PROFILE_READ','I_OFFER_COURSE_WRITE','I_COURSES_READ' ,'I_COURSE_DEATAILS_READ','I_COURSE_DEATAILS_WRITE','I_OFFER_COURSE_READ','I_ANNOUNCEMENT_WRITE','I_ANNOUNCEMENT_READ','I_RESOURCES_READ','I_RESOURCES_WRITE','I_RESOURCE_READ','I_RESOURCE_DELETE']
    },
    Student: {
        can: ['read', 'write']
    },
    Assistant: {
        can: ['A_HOME']
    },
    Guest: {
        can: ['G_HOME']
    }
}
module.exports=roles;