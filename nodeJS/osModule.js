const os = require("os")

console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

totalMemory = os.totalmem() / 1024 / 1024 / 1024
freeMemory = os.freemem() / 1024 / 1024 / 1024
console.log(totalMemory);
console.log(freeMemory);

console.log(os.userInfo());
console.log("running since ",os.uptime() ,"seconds");
console.log("running since ",os.uptime() / 3600,"hours");

console.log(os.cpus());
console.log(os.networkInterfaces());
