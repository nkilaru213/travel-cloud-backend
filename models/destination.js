const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "please add name"],
        unique : true,
        trim : true,
        maxlength : [15, 'Name can not be more than 15 letters']
    },

})

module.exports = mongoose.model('Destination', DestinationSchema)