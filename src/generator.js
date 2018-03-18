const fs = require('fs');
const path = require('path');
const fileIn = process.argv[2];
const fileOut = process.argv[3];
const exampleDir = path.dirname(fileIn);

const readFile = path =>
    new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, contents) => {
            err && reject(err) || resolve(contents);
        })
    });

const writeFile = (path, content) =>
    new Promise((resolve, reject) => {
        fs.writeFile(path, content, 'utf8', err => {
            err && reject(err) || resolve();
        })
    });

readFile(fileIn).then(contents => {
    contents.replace(/!example ((\w|.)+)/g, (_, exampleName) => {
        let exampleFile = path.isAbsolute(exampleName) ? exampleName : path.join(exampleDir, exampleName);
        return exampleFile;
    });

    writeFile(fileOut, result);

}).catch(err => {
    console.log(err);
});
