const fs = require('fs');
const path = require('path');
const ec = require('./exampleCreator');
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
    let result = contents.replace(/!example\[(Example|Array)\] ((\w|.)+)/g, (_, exampleFormat, exampleName) => {
        let examplePath = path.isAbsolute(exampleName) ? exampleName : path.join(exampleDir, exampleName);
        let resolvedPath = path.resolve(examplePath);
        if (exampleFormat === 'Array') {
            let [title, given, when] = require(resolvedPath);
            return ec(title).given(given).when(when);
        } else if (exampleFormat === 'Example')
            return require(resolvedPath);
        else
            return '';
    });

    writeFile(fileOut, result);

}).catch(err => {
    console.log(err);
});
