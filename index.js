// import express
const express = require('express');
const dotenv  = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()



const destinations = require('./routes/destination')
const places = require('./routes/places')
dotenv.config({ path : './config/config.env'});

//connect DB
connectDB(); 

 app.use(cors())
 app.use(express.json())
 app.use('/api/v1/destinations', destinations)
 app.use('/api/v1/places',places)




const server = app.listen(4000, () =>{
    console.log("server is running on port 4000")
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`)
    server.close(() =>process.exit(1))
})