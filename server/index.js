let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let route = require("./routes/route")

let app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/product").then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

app.use("/",route)
app.listen(5000)