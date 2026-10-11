use("collageDB");

// find all students .
db.students.find();

// find single data 
db.students.findOne({ name: "jyoti" });

// find above 21 
db.students.find({ age: { $gt: 21 } });