const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    else if(req.url === '/about'){
        res.end("This is about page")
    }
    else if(req.url === '/contact'){
        res.end("Contact us")
    }
    else if(req.url === '/blogs'){
        res.end("This is our blogs")
    }
    else if (req.url ==='/services'){
        res.end("Our services")
    }
    else{
        res.end("404 page not found :(")
    }
})

server.listen(3000,()=>{
    console.log("Server started at port 3000");
})