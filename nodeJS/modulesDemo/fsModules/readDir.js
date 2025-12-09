const fs = require('fs')

// fs.writeFile('documents',()=>{

// })
fs.readdir('../fsModules',(err,files)=>{
    if(err)
        console.log(err);
    else
        console.log(files);
})