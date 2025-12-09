const cp = require('child_process')

const child = cp.spawn('ls', ['-lh', '/usr']);

child.stdout.on('data',(data)=>{
    console.log(data);
})

child.stderr.on('data',(data)=>{
    console.log(data);
})

child.on('data',(data)=>{
    console.log(data);
})
