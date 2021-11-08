// import * as fs from 'fs';


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('01-read-file', function() {
    const fs = require('fs');
    const path = require('path');
    const fileName = 'text.txt';
    const filePath = path.join(__dirname, fileName);

    const readStream = fs.createReadStream(filePath);
    readStream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
});
myEmitter.emit('01-read-file');