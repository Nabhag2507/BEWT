const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const bookRouter = require('./routes/books.route')
const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.use('/books',bookRouter)
app.use('/users', userRouter)

app.listen(process.env.PORT,(req, res)=>{
    console.log("Server is running on port ", process.env.PORT);
})