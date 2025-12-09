const fs = require('fs')

fs.copyFile('data.txt','output.txt',(err)=>{
    if(err)
        console.log(err);
})