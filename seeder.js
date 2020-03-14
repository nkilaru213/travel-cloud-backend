const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// load vars from env(get mongo URI)
dotenv.config({ path : './config/config.env'})


const Destination = require('./models/destination')
const Places = require('./models/places')

 

// connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true 
});

// parse JSON file
const destinations = JSON.parse(fs.readFileSync(`${__dirname}/_data/destination.json` , 'utf-8'));
const places = JSON.parse(fs.readFileSync(`${__dirname}/_data/places.json`,'utf-8'));
// Import into DB
const importData = async () =>{
    try{
         await Destination.create(destinations)
        //  await Places.create(places)
        console.log('Data imported....')
            process.exit()
} catch(err) {
    console.log(err)

}
    
}

// Delete data 

const deleteData = async () =>{
    try{
        await Destination.deleteMany()
        // await Places.deleteMany()
        console.log('Data removed....');
        process.exit()
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2] === '-i'){
    importData();
}
else if(process.argv[2] === '-d'){
    deleteData()
}