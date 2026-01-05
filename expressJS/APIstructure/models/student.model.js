const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    studentName: String,
    studentEmail: {type:String,required:true,unique:true},
    password: String,
    phone: Number
}, {timestamps: true})

module.exports = mongoose.model("students",userSchema)