const fs = require('fs')

data = fs.readFileSync('data.txt').toString()

console.log(data);

console.log("end");