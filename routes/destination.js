const express = require('express')
const Destination = require('../models/destination')
 const placeRouter = require('./places')
// const getAllDestinations = require('../controllers/destination')

const router = express.Router();

router.use('/places/:destinationId' , placeRouter)
router.get('/' , async(req,res) =>{
    try{
        const destination = await Destination.find()
       
        
        res.status(200).json({
            success : true,
            count : destination.length,
            data : destination
         })
        }
     catch(err) {
         console.log(err)
     }
           
    
})

// get single destination

// post new destination
router.post('/' , async(req, res) =>{
    const data = req.body
    console.log(data)
try{
    const destination =  await Destination.create(req.body)
    res.status(200).json({
        success : true,
        data : destination
    })
    console.log(destination)
}

catch(err){
    console.log(err)
}
   
})





module.exports = router