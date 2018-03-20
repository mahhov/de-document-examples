// let getTitleBlock = title =>
//     `## ${title}\n\n`;
//
// let getFuncBlock = (title, func, excludeReturn) => {
//     let funcSnippet = getFuncSnippet(func, excludeReturn);
//     return getBlock(title, funcSnippet);
// };
//
// let getObjBlock = (title, obj) => {
//     let objSnippet = getObjSnippet(obj);
//     return getBlock(title, objSnippet);
// };
//
// let getBlock = (title, snippet) =>
//     `### ${title}\n\n\`\`\`\n${snippet}\n\`\`\`\n\n`;
//

class JavascriptDoc {
    constructor(source, flags) {
        this.source = source;
        this.flags = flags;
    };

    generate() {
        if (!this.flags.length)
            return 'yet to support no-flags js';

        let snippetData = this.source[this.flags[0]] || this.flags[0] === 'then' && this.createThenSnippetData();
        let snippet = JavascriptDoc.generateSnippet(snippetData);
        return JavascriptDoc.codeWrap(snippet);
    }

    createThenSnippetData() {
        return {obj: this.source.when.func(this.source.given.func)}
    };

    static generateSnippet(snippetData) {
        if (snippetData.func) {
            let funcString = snippetData.func.toString();
            let regex = snippetData.excludeReturn ? /{\n*((.|\s)*)\n\s*\breturn\b(.|\s)*}/ : /{\n*((.|\s)*)\n\s*}/;
            return funcString.match(regex)[1];
        } else if (snippetData.obj)
            return JSON.stringify(snippetData.obj, null, 2);
        else
            return '';
    }

    static  codeWrap(code) {
        return `\`\`\`\n${code}\n\`\`\``;
    }
}

module.exports = JavascriptDoc;
