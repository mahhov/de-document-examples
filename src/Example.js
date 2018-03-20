class Example {
    constructor(title) {
        this.title = title;
    }

    given(givenFunc) {
        this.givenFunc = givenFunc;
        return this;
    }

    when(whenFunc) {
        let thenObj = whenFunc(this.givenFunc());

        let titleBlock = Example.getTitleBlock(this.title);
        let givenBlock = Example.getFuncBlock('Given', this.givenFunc, true);
        let whenBlock = Example.getFuncBlock('When', whenFunc, true);
        let thenBlock = Example.getObjBlock('Then', thenObj);

        return `${titleBlock}${givenBlock}${whenBlock}${thenBlock}`;
    }

    static getTitleBlock(title) {
        return `## ${title}\n\n`;
    }

    static getFuncBlock(title, func, hasReturn) {
        let funcInner = Example.getFuncSnippet(func, hasReturn);
        return Example.getBlock(title, funcInner);
    }

    static getObjBlock(title, obj) {
        let objString = JSON.stringify(obj, null, 2);
        return Example.getBlock(title, objString);
    }

    static getFuncInner(func, hasReturn) {
        let funcString = func.toString();
        let regex = hasReturn ? /{\n*((.|\s)*)\n\s*\breturn\b(.|\s)*}/ : /{\n*((.|\s)*)\n\s*}/;
        return funcString.match(regex)[1];
    }

    static getBlock(title, inner) {
        return `### ${title}\n\n\`\`\`\n${inner}\n\`\`\`\n\n`
    }
}

module.exports = Example;
