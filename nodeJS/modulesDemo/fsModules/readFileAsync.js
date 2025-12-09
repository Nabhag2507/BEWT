const fs = require('fs')

console.log("start");

fs.readFile('data.txt',(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
        console.log(data.toString());
})

console.log("end");