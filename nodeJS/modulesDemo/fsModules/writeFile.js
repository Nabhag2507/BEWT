const fs = require('fs')

fs.writeFile('output.txt',"Hello this is output file",(err)=>{
    if(err)
        console.log(err);
})