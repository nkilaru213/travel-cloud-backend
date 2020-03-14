// needs express for routes
const express = require("express")
const Places = require("../models/places")
const router = express.Router({mergeParams : true})
router.get('/',async(req,res) =>{
    let query
    if(req.params.destinationId){
        query =  Places.find({destination : req.params.destinationId})
    }

    else{
        query =  Places.find()
    }
    
        
    const places = await query    

    res.status(200).json({
        success : true,
        count : places.length,
        data : places
    })
 
})
    
    
module.exports=router;
