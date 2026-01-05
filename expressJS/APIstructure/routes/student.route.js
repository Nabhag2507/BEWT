const express = require('express')
const studentRouter = express.Router()
const student = require('../models/student.model')


studentRouter.get('/', async (req, res) => {
    try {
        const student = await student.find()
        res.status(200).json({message:"All student list"})
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

studentRouter.get('/:id', async (req, res) => {
    try {
        const stuByID = await student.findById(req.params.id)
        if (!stuByID)
            return res.json({message:"Student ",stuByID})
        res.send("student :", stuByID)
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })

    }
})

studentRouter.post("/signup", async (req, res) => {
    try {
        const { studentName, studentEmail, password, phone } = req.body
        const stuToAdd = await student.create({
            studentName, studentEmail, password, phone
        })
        res.json({message:"User created successfully", stuToAdd})
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })

    }
})

studentRouter.put("/update/:id", async (req, res) => {
    try {
        const stuToUpdate = await student.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        )
        if (!stuToUpdate) {
            return res.status(404).json({ message: "student not found" })
        }
        res.json({ message: "student updated successfully" })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })

    }
})

studentRouter.delete("/delete/:id", async (req, res) => {
    try {
        const stuToDelete = await student.findByIdAndDelete(req.params.id)

        if (!stuToDelete) {
            return res.status(404).json({ message: "student not found" })
        }
        res.json({ message: "student deleted successfully" })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })

    }
})

module.exports = studentRouter