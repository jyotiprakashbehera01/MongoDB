use("ecommerce");

db.sales.find()

// db.sales.getIndexes()

db.sales.createIndex({quantity: 1})

// it use read faster operation . 
// because right operation has slow .