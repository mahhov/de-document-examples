const fs = require('fs');
const path = require('path');
const ec = require('./exampleCreator');
const fileIn = process.argv[2];
const fileOut = process.argv[3];
const fileInDir = path.dirname(fileIn);

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

let resolvePath = inPath => {
    let expandedPath = path.isAbsolute(inPath) ? inPath : path.join(fileInDir, inPath);
    return path.resolve(expandedPath);
};

let requirePathMem = {};

let requirePath = resolvedPath => {
    return requirePathMem[resolvedPath] || (requirePathMem[resolvedPath] = require(resolvedPath));
};

readFile(fileIn).then(contents => {
    let result = contents.replace(/!example\[(.*)\]/g, (_, paramsStr) => {
        let [inPath, ...flags] = paramsStr.split(' ');
        switch (path.extname(inPath)) {
            case '.js':
                let resolvedPath = resolvePath(inPath);
                let requiredPath = requirePath(resolvedPath);
                return ec(requiredPath, flags);
            case '.md':
            default:
                return 'yet to support nested md / files';
        }
    });

    writeFile(fileOut, result);

}).catch(err => {
    console.log(err);
});
