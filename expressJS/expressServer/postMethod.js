const express = require('express')

const app = express()

app.use(express.json())
app.get("/user/:id",(req,res)=>{
    res.send(req.params.id)
})

app.post("/register",(req,res)=>{
    const {name, email, password} = req.body
    res.send(`Name : ${name}, Email : ${email}, Password ${password}`)
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})