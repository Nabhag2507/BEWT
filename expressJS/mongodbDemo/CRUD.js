const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const mongoose = require('mongoose')
const user = require('./user.js')

app.use(express.json())

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.get("/users",async(req,res)=>{
    try{
        const users = await user.find()
        res.json({message :"All users list :", users})
    }catch(err){
        console.log(err);
    }
})

// get by id
app.get("/users/:id", async(req,res)=>{
    try{
        const userById = await user.findById(req.params.id)
        if(!userById){
            return res.status(404).json({message : "User not found"})
        }
        res.json("User :",userById)
    }catch(err){
        console.log(err);
    }
})

app.post("/signup",async(req,res)=>{
    try{
        const { name, email, password, phone } = req.body
        const userToAdd = await user.create({
            name, email, password, phone
        })
        res.send("User created successfully", userToAdd)
    }catch(err){
        console.log(err);
    }
})

app.put("/update/:id",async(req,res)=>{
    try{
        const userToUpdate = await user.findByIdAndUpdate(req.params.id,
            { $set : req.body },
            { new : true }
        )
        if(!userToUpdate){
            return res.status(404).json({message: "User not found"})
        }
        res.json({message: "User updated successfully"})
    }catch(err){
        console.log(err);
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        const userToDelete = await user.findByIdAndDelete(req.params.id)

        if(!userToDelete){
            return res.status(404).json({message : "User not found"})
        }
        res.json({message : "User deleted successfully"})
    }catch(err){
        console.log(err);
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Server started at port 3000");
})