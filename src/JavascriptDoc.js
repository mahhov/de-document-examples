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
            let preBrace = /(\([\w\s,[\]{}$]*\)|=>)(=>|\s)*/;
            let inBrace = snippetData.excludeReturn ? /{\n*((.|\s)*)\n\s*\breturn\b(.|\s)*}/ : /{\n*((.|\s)*)\n\s*}/;
            let regex = new RegExp(preBrace.source + inBrace.source);
            let funcInner = funcString.match(regex)[3];
            let unindentedFuncInner = JavascriptDoc.unindent(funcInner);
            return JavascriptDoc.codeWrap(unindentedFuncInner);
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

    static unindent(string) {
        return string.replace(/^(\t| {4})/gm, () => ''); // todo paramaterize 4
    }
}

module.exports = JavascriptDoc;
