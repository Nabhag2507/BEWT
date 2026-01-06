const express = require('express')
const bookRouter = express.Router()
const book = require('../models/books.model')

bookRouter.get('/',async(req, res)=>{
    try {
        const bookToFind = await book.find()
        res.status(200).json({message :"All books List",allbooks:bookToFind})
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

bookRouter.get('/:id',async(req,res)=>{
    try{
        const bookById = await book.findById(req.params.id)
        if(!bookById)
            return res.json({message: "Book not found"})
        res.json({message: "Book :",bookById})
    }catch(err){
        console.log(err);
    }
})

bookRouter.post('/add',async(req, res)=>{
    try{
        const { title,totalQuantity,availableQuantity } = req.body
        const bookToAdd = await book.create({
            title,totalQuantity,availableQuantity
        })
        res.json({message :"Book added successfully", bookToAdd})
    }
    catch(err){
        console.log(err);
    }
})

bookRouter.put("/update/:id",async(req,res)=>{
    try{
        const bookToUpdate = await book.findByIdAndUpdate(req.params.id,
            { $set : req.body },
            { new : true }
        )
        if(!bookToUpdate){
            return res.status(404).json({message: "Book not found"})
        }
        res.json({message: "Book updated successfully"})
    }catch(err){
        console.log(err);
    }
})

bookRouter.delete("/delete/:id", async(req,res)=>{
    try{
        const bookToDelete = await book.findByIdAndDelete(req.params.id)

        if(!bookToDelete){
            return res.status(404).json({message : "Book not found"})
        }
        res.json({message : "Book deleted successfully"})
    }catch(err){
        console.log(err);
    }
})

module.exports = bookRouter
