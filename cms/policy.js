var permissions=require('./permissions.js');

let RP = {
    Instructor: {
        permissions: ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10','P11','P12','P13','P14','P15','P16','P17','P18','P19','P20',
                      'P21','P22','P23','P24','P25','P26','P27','P28','P29','P30','P31','P32','P33','P34','P35','P36','P37','P38','P39','P40',
                      'P41','P42','P43','P44','P45','P46','P47','P49']
    
    },
    Student: {
        permissions: ['P59','P60','P62','P63','P64','P65','P66','P67','P68','P69','P70',
                        'P71','P72','P73','P74','P75','P76','P77','P78','P79','P80',
                        'P81','P82','P83','P84','P85','P86','P87','P88','P89','P90']
    },
    Student2: {
        permissions: ['P91']
    },
    Student3: {
        permissions: ['P92']
    },
    Student4: {
        permissions: ['P93']
    },
    CR: {
        permissions: ['P61']
    },
    Assistant: {
        permissions: ['P94','P95','P96','P97','P98','P99','P100',
                      'P101','P102']
    },
    Guest: {
        permissions: ['P51','P52','P53','P54','P55','P56','P57','P58']
    },
    HOD:{
        permissions: ['P48','P50']
    }
}
module.exports=RP;