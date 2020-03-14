const mongoose = require("mongoose");
const PlacesSchema = new mongoose.Schema({
   name:{
    type: String,
    required: [true, "please select place"],
    unique: true,
   } ,
   description:{
       type:String,
       required: [true,"please add description"],
       
   },
   destination:{
       type: mongoose.Schema.ObjectId,
       ref: 'Destination',
       required: true
   }
})
module.exports = mongoose.model('Places', PlacesSchema)