const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    facultyName: String,
    facultyEmail: {type:String,required:true,unique:true},
    password: String,
    phone: Number
}, {timestamps: true})

module.exports = mongoose.model("faculties",userSchema)