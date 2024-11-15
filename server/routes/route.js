let {add,view,upd,del} = require("../controllers/controller")
let express = require("express")

let route = new express.Router()
route.post("/add",add)
route.get("/view",view)
route.post("/upd",upd)
route.post("/del",del)

module.exports = route