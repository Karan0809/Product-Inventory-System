let pm = require("../models/model")

let add = async(req,res)=>{
    try{
        let data = new pm(req.body)
        await data.save()
        res.json({"msg":"Data Stored successfully"})
    }
    catch(err){
        res.json({"err":"Error in data storing"})
    }
}

let view = async(req,res)=>{
    try{
        let obj = await pm.find()
        res.json(obj)
    }
    catch(err){
        res.json({"err":"Error in data fetching"})
    }
}

let upd = async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"Data updated"})
    }
    catch(err){
        res.json({"err":"Error in updating data"})
    }
}

let del = async(req,res)=>{
    try{
        await pm.deleteMany({"_id":{$in:req.body.ids}})
        res.json({"msg":"Data deleted successfully"})
    }
    catch(err){
        res.json({"err":"Error in deleting data"})
    }
}

module.exports = {add,view,upd,del}