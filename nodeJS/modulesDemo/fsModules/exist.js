const fs = require('fs')

if(fs.existsSync('config.js'))
    console.log("File exist");
else
    console.log("File does not exist");