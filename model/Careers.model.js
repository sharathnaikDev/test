const mongoose = require('mongoose');

const CareersSchema = new mongoose.Schema({
    jobTitle: {
        type : String,
        required: [true, 'Please add a Job Title'],
        trim: true,
        maxlenght: [50, 'Job Title can not be more that 100 characters'] 
    },
    slug: String,
    openings: String,
    mandatorySkills: {
        type: String,
        required: [true, 'Please Add Mandatory Skills']
    },
    secondarySkills: String,
    location : String,
    roleOverview: String,
    eligibilityCriteria: [String]
})

module.exports = mongoose.model('Career', CareersSchema)