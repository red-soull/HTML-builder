const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const fileName = 'write-text.txt';
const filePath = path.join(__dirname, fileName);

const writeStream = fs.createWriteStream(filePath);

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('02-write-file', function() {
    console.log("Hi there, I'm waiting some text from you")
    
    process.stdin.on('data', chunk => {
        if (chunk.toString().toLowerCase().trim() === 'exit') {
            stopDoingThis();
        }
        writeStream.write(chunk);
    });

    ['SIGINT', 'SIGTERM', 'SIGQUIT']
        .forEach(signal => process.on(signal, () => {
            stopDoingThis();
        }));

    function stopDoingThis() {
        console.log("Listen, I've gotta go! See you next time!");
        writeStream.close();
        process.exit(0);
    };

});
myEmitter.emit('02-write-file');
