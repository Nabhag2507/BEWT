const http = require('http')
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.statusCode = 200
        res.end(fs.readFileSync('./home.txt'))
    }
    else if(req.url === '/about'){
        res.statusCode = 200
        res.end(fs.readFileSync('./about.txt'))
    }
    else if(req.url === '/contact'){
        res.statusCode = 200
        res.end(fs.readFileSync('./contact.txt'))
    }
    else if(req.url === '/blogs'){
        res.statusCode = 200
        res.end(fs.readFileSync('./blogs.txt'))
    }
    else if (req.url ==='/services'){
        res.statusCode = 200
        res.end(fs.readFileSync('./services.txt'))
    }
    else{
        res.statusCode = 404
        res.end("404 page not found :(")
    }
})

server.listen(3000,()=>{
    console.log("Server started at port 3000");
})