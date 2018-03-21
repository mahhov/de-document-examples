class JavascriptDoc {
    constructor(source, flags) {
        this.source = source;
        this.flags = flags;
    };

    generate() {
        let snippetData = this.source[this.flags[0]] || this.flags[0] === 'then' && this.createThenSnippetData();
        if (!snippetData) {
            throw `cannot find flag ${this.flags[0]}`;
        }
        return JavascriptDoc.generateSnippet(snippetData);
    }

    createThenSnippetData() {
        return {obj: this.source.when.func(this.source.given.func())}
    };

    static generateSnippet(snippetData) {
        if (snippetData.func) {
            let funcString = snippetData.func.toString();
            let regex = snippetData.excludeReturn ? /{\n*((.|\s)*)\n\s*\breturn\b(.|\s)*}/ : /{\n*((.|\s)*)\n\s*}/;
            return JavascriptDoc.codeWrap(funcString.match(regex)[1]);
        } else if (snippetData.obj)
            return JavascriptDoc.codeWrap(JSON.stringify(snippetData.obj, null, 2));
        else if (snippetData.text)
            return snippetData.text;
        else
            throw `data not of valid type: {func | obj | text}`
    }

    static  codeWrap(code) {
        return `\`\`\`\n${code}\n\`\`\``;
    }
}

module.exports = JavascriptDoc;
