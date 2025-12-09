const fs = require('fs')

fs.unlink('temp.txt',(err)=>{
    if(err)
        console.log(err);
})