const generator = require('./generator');

class MarkdownDoc {
    constructor(dir, contents, flags) {
        this.dir = dir;
        this.contents = contents;
        this.flags = flags;
    };

    generate() {
        return this.contents.replace(/!example\[(.*)\]/g, (_, paramsStr) => {
            let subsitutedParamsStr = paramsStr.replace(/\[([0-9]*)\]/g, (match, number) => (this.flags[number] || match));
            let [inPath, ...flags] = subsitutedParamsStr.split(' ');
            return generator.docFromFile(this.dir, inPath, flags).generate();
        });
    }
}

module.exports = MarkdownDoc;
