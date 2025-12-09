const fs = require('fs')

fs.appendFile('output.txt',"\nAppended something",(err)=>{
    if(err)
        console.log(err);
})