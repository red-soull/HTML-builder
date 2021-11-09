const fs = require('fs');
const path = require('path');

// const dirName = 'secret-folder';
const dirPath = path.join(__dirname, 'secret-folder');


fs.promises.readdir(dirPath, {withFileTypes: true}).then(
    files => {
        for (let file of files) {
            if (file.isFile()) {
                getFileInfo(file.name);
            }
        }
    })

function getFileInfo(file) {
    
    let fileExtName = path.extname(file);
    let fileName = path.basename(file, fileExtName);
    let filePath = path.join(dirPath, file);

    fs.stat(filePath, (error, data) => {
        const fileSize = Math.ceil(data['size'] / 1024);

       console.log(`${fileName}` - `${fileExtName}` - `${fileSize}`);
    })
    
}


