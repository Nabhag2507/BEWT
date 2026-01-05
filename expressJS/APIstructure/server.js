const express = require('express')
const mongoose = require('mongoose');
const facyltyRouter = require('./routes/faculty.route');
const studentRouter = require('./routes/student.route');
const dotenv=require("dotenv");
dotenv.config()
const app = express()
app.use(express.json());

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.use('/faculty',facyltyRouter)
app.use('/student',studentRouter)

app.listen(3000,()=>{
    console.log("server started on port 3000");
})