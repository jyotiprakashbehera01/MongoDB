
use("collageDB"); // 

db.students.insertOne ({
    name : "jyoti",
    age : 21,
    course : "Mernstack",
    Year : 3,
    phonno : 70078452452 
});

db.students.insertMany([
    {
    name : "mikuuuuuu",
    age : 21,
    course : "js",
    Year : 3,
    phonno : 5498411561512
    },
      {
    name : "panda",
    age : 23,
    course : "python",
    Year : 3,
    phonno : 1111111111111 
    },
     {
    name : "jyoti",
    age : 23,
    course : "python",
    Year : 3,
    phonno :651115415415
    },
    {
    name : "karan",
    age : 21,
    course : "Mernstack",
    Year : 3,
    phonno :55515154151  
    },
]);