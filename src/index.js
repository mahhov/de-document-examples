const generator = require('./generator');
const fileIn = process.argv[2];
const fileOut = process.argv[3];

generator.generate(fileIn, fileOut);
