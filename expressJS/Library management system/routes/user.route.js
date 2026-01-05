const express = require('express')
const userRouter = express.Router()
const user = require('../models/user.model')

userRouter.get('/',async(req, res)=>{
    try{
        const userToFind = await user.find()
        res.status(200).json({message: "All users list", users:userToFind})
    }catch(err){
        console.log(err);
    }
})

userRouter.get('/:id',async(req,res)=>{
    try{
        const userById = await user.findById(req.params.id)
        if(!userById)
            return res.json({message: "user not found"})
        res.json({message: "user :",userById})
    }catch(err){
        console.log(err);
    }
})

userRouter.post('/add',async(req, res)=>{
    try{
        const { userName, phone } = req.body
        const userToAdd = await user.create({
            userName,phone
        })
        res.send("user added successfully", userToAdd)
    }
    catch(err){
        console.log(err);
    }
})

userRouter.put("/update/:id",async(req,res)=>{
    try{
        const userToUpdate = await user.findByIdAndUpdate(req.params.id,
            { $set : req.body },
            { new : true }
        )
        if(!userToUpdate){
            return res.status(404).json({message: "user not found"})
        }
        res.json({message: "user updated successfully"})
    }catch(err){
        console.log(err);
    }
})

userRouter.delete("/delete/:id", async(req,res)=>{
    try{
        const userToDelete = await user.findByIdAndDelete(req.params.id)

        if(!userToDelete){
            return res.status(404).json({message : "user not found"})
        }
        res.json({message : "user deleted successfully"})
    }catch(err){
        console.log(err);
    }
})

module.exports = userRouter