#!/usr/bin/env node

const generator = require('./generator');
const args = process.argv;

let excludeSigIndex = args.indexOf(('-no-sig'));
let excludeSig = excludeSigIndex !== -1;
excludeSig && args.splice(excludeSigIndex, 1);

let fileIn = process.argv[2];
let fileOut = process.argv[3];

generator.generate(fileIn, fileOut, excludeSig);
