const Destination = require('../models/destination')

exports.getAllDestinations =  (req, res, next) =>{
    // try{
    //     const destination = await Destination.find()
    //     if(!destination){
    //         console.log(destination)
    //     }
        
    //     res.status(200).json({
    //         success : true,
    //         count : destination.length,
    //         data : destination
    //     })
    res.status(200).send({
        success : true,
        data : "get all destinations"
    })
    }
    // catch(err) {
    //     console.log(err)
    // }
           
