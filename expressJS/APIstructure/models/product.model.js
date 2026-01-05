const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    productName: String,
    productID: {type:String,required:true,unique:true}
}, {timestamps: true})

module.exports = mongoose.model("products",userSchema)