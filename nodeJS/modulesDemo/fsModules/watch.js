const fs = require('fs')

fs.watch(".",(event,fileName)=>{
    console.log(`Events : ${event}, file : ${fileName}`);
})
