const mongoose = require('mongoose');


const planetsSchema = new mongoose.Schema({
    keplerName: {
        type:String,
        required: true,
    },
    // keplerDiscoverDate: {
    //     type:Date,
    //     required: true,
    // },
    // keplerRadius: {
    //     type:Number,
    //     required: true,
    // },
});

 module.exports = mongoose.model('Planet', planetsSchema);