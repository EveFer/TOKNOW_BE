const mongoose = require("mongoose")

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,                  
        minlength: 3,
        maxlength: 30,
        required: true
    },
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        minlength: 8,
        maxlength: 10,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    },
    repassword: {
        type: String,
        minlength: 3,
        required: true
    },

        // generation: [ id: generation ]
    generation: {
        type: String,
        enum: ["2022", "2023", "2024", "2025"],
        required: true
    }
})


const School = mongoose.model("school", schoolSchema)


module.exports = School
