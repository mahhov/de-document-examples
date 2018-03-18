const fileIn = process.argv[2];
const fileOut = process.argv[3];
const fs = require('fs');

fs.readFile(fileIn, 'utf8', (err, data) => {
    err && console.log(err);
    let result = data.replace(/elephant/g, 'hippo');

    fs.writeFile(fileOut, result, 'utf8', err => {
        err && console.log(err);
    });
});
