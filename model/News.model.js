const mongoose = require('mongoose');


const NewsSchema = new mongoose.Schema({
   title: {
        type : String,
        required: [true, 'Please add News Title'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add Award Title'],
        trim: true 
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('News', NewsSchema)