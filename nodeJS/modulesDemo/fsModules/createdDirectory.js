const fs = require('fs')

fs.mkdir('tempDir',(err)=>{
    if(err.code === 'EEXIST')
        console.log("Folder already exist");
    if(err)
        console.log(err);
})
