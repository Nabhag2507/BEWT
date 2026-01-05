const express = require('express')
const dotenv = require('dotenv')
const facultyRouter = express.Router()
const faculty = require('../models/faculty.model')
dotenv.config()

facultyRouter.get('/', async (req, res) => {
    try {
        const faculty = await faculty.find()
        res.status(200).send("All faculty list")
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

facultyRouter.get('/:id',async(req,res)=>{
    try{
        const facByID = await faculty.findById(req.params.id)
        if(!facByID)
            return res.send("User not found")
        res.send("Faculty :",facByID)
    }catch(err){
        console.log(err);
    }
})

facultyRouter.post("/signup",async(req,res)=>{
    try{
        const { facultyName, facultyEmail, password, phone } = req.body
        const facToAdd = await faculty.create({
            facultyName, facultyEmail, password, phone
        })
        res.send("User created successfully", facToAdd)
    }catch(err){
        console.log(err);
    }
})

facultyRouter.put("/update/:id",async(req,res)=>{
    try{
        const facToUpdate = await faculty.findByIdAndUpdate(req.params.id,
            { $set : req.body },
            { new : true }
        )
        if(!facToUpdate){
            return res.status(404).json({message: "Faculty not found"})
        }
        res.json({message: "Faculty updated successfully"})
    }catch(err){
        console.log(err);
    }
})

facultyRouter.delete("/delete/:id", async(req,res)=>{
    try{
        const facToDelete = await faculty.findByIdAndDelete(req.params.id)

        if(!facToDelete){
            return res.status(404).json({message : "Faculty not found"})
        }
        res.json({message : "Faculty deleted successfully"})
    }catch(err){
        console.log(err);
    }
})

module.exports = facultyRouter