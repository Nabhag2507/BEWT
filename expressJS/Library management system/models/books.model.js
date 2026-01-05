const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        bookName: String,
        bookId: Number,
}, {Timestamp:true})

module.exports = mongoose.model("books", userSchema)