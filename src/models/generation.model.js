const mongoose = require("mongoose")

const generationSchema = new mongoose.Schema({
    year: {
        type: Number,
        minlength: 4,
        maxlength: 4,
        required: true
    },
    grade: {
        type: Number,
        min: 1,
        max: 6,
        required: true
    },
        // school: ( id: school )
    schoolId: {
        type: String,
        minlength: 3,
        required: true
    },
        // groups: ( id: group )
    groupId: {
        type: String,
        minlength: 3,
        required: true
    }
})


const Generation = mongoose.model("generation", generationSchema)


module.exports = Generation
