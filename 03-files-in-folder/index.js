const fs = require('fs');
const path = require('path');

const dirName = 'secret-folder';
const dirPath = path.join(__dirname, dirName);


function getFileInfo(file) {
    let fileExt = path.extname(file);
    let fileExtName = path.extname(file).slice(1);
    let fileName = path.basename(file, fileExt);

    fs.stat(path.join(dirPath, file), (error, data) => {
        const fileSize = Math.round(data['size'] / 1024).toString() + 'kb';

       console.log(`${fileName} - ${fileExtName} - ${fileSize}`);
    })
    
}

fs.promises.readdir(dirPath, {withFileTypes: true}).then(
    files => {
        for (let file of files) {
            if (file.isFile()) {
                getFileInfo(file.name);
            }
        }
    })


