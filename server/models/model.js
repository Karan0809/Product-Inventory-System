let mongoose = require("mongoose")

let prodSch = new mongoose.Schema({
    "_id":String,
    "prodName":String,
    "category":String,
    "supplier":String,
    "quantity":Number,
    "price":String
})

let pm = mongoose.model("product",prodSch)
module.exports = pm