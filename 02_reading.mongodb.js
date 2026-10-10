use("ecommerce");

// db.product.find() // it use to find all product .

// db.products.find({"name" : "Wireless Mouse"}) // it use to find perticular product .

// db.products.find({ price: { $gt: 1000 } }) // it use to comparesion operater .

// db.products.find({ price: { $gt: 1000, $lte: 50000 } })

// db.products.find({ $or: [{  "category": "Electronics" }, { stack: {$lt: 50 } }] })

// db.products.find({}, {name: 1, price: 1, _id: 0}) // you want see specific fild .

// sorting and limiting : 
// db.products.find().sort({ price: -1 }).limit(2)
// db.products.find().sort({ price: -1 }).skip(1).limit(2) // pagination .

