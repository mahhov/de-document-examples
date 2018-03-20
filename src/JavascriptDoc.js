// class Example {
//     constructor(source, snippetDatas) {
//         this.source = source;
//         this.snippetDatas = snippetDatas;
//     }
//
//     getExample(flags) {
//         if (!flags.length)
//             return 'yet to support no-flags js';
//
//         let snippetData = this.source[flags[0]];
//         let snippet = Example.generateSnippet(snippetData);
//         return Example.codeWrap(snippet);
//     }
//
//     static generateSnippet(snippetData) {
//         if (snippetData.func) {
//             let funcString = snippetData.func.toString();
//             let regex = snippetData.excludeReturn ? /{\n*((.|\s)*)\n\s*\breturn\b(.|\s)*}/ : /{\n*((.|\s)*)\n\s*}/;
//             return funcString.match(regex)[1];
//         } else if (snippetData.obj)
//             return JSON.stringify(snippetData.obj, null, 2);
//         else
//             return '';
//     }
//
//     static codeWrap(code) {
//         return `\`\`\`\n${code}\n\`\`\``;
//     }
// }
//
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
// module.exports = (source, flags) => new Example(source).getExample(flags);

class JavascriptDoc {
    generate() {
        return '';
    }
}

module.exports = JavascriptDoc;
