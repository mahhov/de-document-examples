const JavascriptDoc = require('./JavascriptDoc');

class JavascriptUnflaggedDoc extends JavascriptDoc {
    constructor(source) {
        super(source, []);
    };

    generate() {
        let titleBlock = JavascriptUnflaggedDoc.getTitleBlock(this.source.title && this.source.title.text);

        let givenSnippet = JavascriptDoc.generateSnippet(this.source.given);
        let givenBlock = JavascriptUnflaggedDoc.getBlock('Given', givenSnippet);

        let whenSnippet = JavascriptDoc.generateSnippet(this.source.when);
        let whenBlock = JavascriptUnflaggedDoc.getBlock('when', whenSnippet);

        let thenSnippetData = this.source.then || this.createThenSnippetData();
        let thenSnippet = JavascriptDoc.generateSnippet(thenSnippetData);
        let thenBlock = JavascriptUnflaggedDoc.getBlock('then', thenSnippet);

        return `${titleBlock}${givenBlock}${whenBlock}${thenBlock}`;
    }

    static getTitleBlock(title) {
        return title ? `## ${title}\n\n` : '';
    }

    static getFuncBlock(title, func, excludeReturn) {
        let funcSnippet = JavascriptUnflaggedDoc.getFuncSnippet(func, excludeReturn);
        return getBlock(title, funcSnippet);
    }

    static getBlock(title, snippet) {
        return `### ${title}\n\n\`\`\`\n${snippet}\n\`\`\`\n\n`;
    }
}

module.exports = JavascriptUnflaggedDoc;
