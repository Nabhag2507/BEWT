const express = require('express')
const fs = require('fs')

const app = express()

app.get('/',(req,res)=>{res.send(fs.readFileSync('./home.txt'))})
app.get('/about',(req,res)=>{res.send(fs.readFileSync('./about.txt'))})
app.get('/blogs',(req,res)=>{res.send(fs.readFileSync('./blogs.txt'))})
app.get('/services',(req,res)=>{res.send(fs.readFileSync('./services.txt'))})
app.get('/contact',(req,res)=>{res.send(fs.readFileSync('./contact.txt'))})

app.use((req,res)=>{res.status(404).send("Page not found")})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})
