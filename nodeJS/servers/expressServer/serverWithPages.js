const express = require('express')

const app = express()

app.get('/',(req,res)=>{res.send("Hello world from home page")})
app.get('/about',(req,res)=>{res.send("Hello world from about page")})
app.get('/blogs',(req,res)=>{res.send("Hello world from blogs page")})
app.post('/services',(req,res)=>{res.send("Services from post method")})
app.delete('/about',(req,res)=>{res.send("Delete")})

app.use((req,res)=>{res.status(404).send("Page not found")})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})