const EventEmitter = require('events');

const fs = require('fs');
const path = require('path');
const fileName = 'text.txt';
const filePath = path.join(__dirname, fileName);

const readStream = fs.createReadStream(filePath);

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('01-read-file', function() {
    
    readStream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
});
myEmitter.emit('01-read-file');