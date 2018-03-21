const fs = require('fs');
const path = require('path');

let readFile = path => {
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (e) {
        throw `file not found ${path}`;
    }
};

let writeFile = (path, content) =>
    new Promise((resolve, reject) => {
        fs.writeFile(path, content, 'utf8', err => {
            err && reject(err) || resolve();
        })
    });

let resolvePath = (dir, inPath) => {
    let expandedPath = path.isAbsolute(inPath) ? inPath : path.join(dir, inPath);
    return path.resolve(expandedPath);
};

let requirePathMem = {};

let requirePath = resolvedPath =>
    (requirePathMem[resolvedPath] || (requirePathMem[resolvedPath] = requireSafe(resolvedPath)));

let requireSafe = resolvedPath => {
    try {
        return require(resolvedPath);
    } catch (e) {
        throw `js file not found: ${resolvedPath}`;
    }
};

let docFromFile = (dir, inPath, flags) => {
    const MarkdownDoc = require('./MarkdownDoc');
    const JavascriptDoc = require('./JavascriptDoc');
    const JavascriptUnflaggedDoc = require('./JavascriptUnflaggedDoc');

    let resolvedPath = resolvePath(dir, inPath);

    switch (path.extname(inPath)) {
        case '.js':
            let requiredPath = requirePath(resolvedPath);
            return !flags.length && new JavascriptUnflaggedDoc(requiredPath) || new JavascriptDoc(requiredPath, flags);
        case '.md':
        default:
            let contents = readFile(resolvedPath);
            let recursiveDir = path.dirname(resolvedPath);
            return new MarkdownDoc(recursiveDir, contents, flags);
    }
};

let generate = (fileIn, fileOut) => {
    let fileInDir = path.dirname(fileIn);
    let fileName = path.basename(fileIn);
    let doc = docFromFile(fileInDir, fileName, []);
    writeFile(fileOut, doc.generate());
};

module.exports = {docFromFile, generate};
