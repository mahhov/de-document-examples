const fs = require('fs');
const path = require('path');
const fileIn = process.argv[2];
const fileOut = process.argv[3];
const exampleDir = path.dirname(fileIn);

fs.readFile(fileIn, 'utf8', (err, data) => {
    err && console.log(err);
    let result = data.replace(/!example ((\w|.)+)/g, (_, exampleName) => {
        let exampleFile = path.isAbsolute(exampleName) ? exampleName : path.join(exampleDir, exampleName);
        return exampleFile;
    });

    fs.writeFile(fileOut, result, 'utf8', err => {
        err && console.log(err);
    });
});
