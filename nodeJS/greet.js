const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log("hello",name);
});

emitter.emit('greet', 'World');
