class Example {
    constructor(givenFunc) {
        this.givenFunc = givenFunc;
    }

    static given(givenFunc) {
        return new Example(givenFunc);
    }

    when(whenFunc) {
        let thenObj = whenFunc(this.givenFunc());

        let givenBlock = Example.getFuncBlock('Given', this.givenFunc, true);
        let whenBlock = Example.getFuncBlock('When', whenFunc, true);
        let thenBlock = Example.getObjBlock('Then', thenObj);

        let x = `${givenBlock}${whenBlock}${thenBlock}`;
        console.log(x);
        return x;
    }

    static getFuncBlock(title, func, hasReturn) {
        let funcInner = Example.getFuncInner(func, hasReturn);
        return Example.getBlock(title, funcInner);
    }

    static getObjBlock(title, obj) {
        let objString = JSON.stringify(obj, null, 2);
        return Example.getBlock(title, objString);
    }

    static getFuncInner(func, hasReturn) {
        let funcString = func.toString();
        let regex = hasReturn ? /{((.|\s)*)\breturn\b(.|\s)*}/ : /{((.|\s)*)}/;
        return funcString.match(regex)[1];
    }

    static getBlock(title, inner) {
        return `### ${title}\n\n\`\`\`\n${inner}\n\`\`\`\n\n`
    }
}

module.exports = Example;
