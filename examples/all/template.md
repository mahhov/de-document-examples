# Overview

Automatically update markdown documentation with examples.

# Setup

`npm i -g de-document-examples`

`document path/template.md path/readme.md`

# Markdown Syntax Summary

## basic js snippet

`!!example[path/fileName.js flag]`

e.g. `!!example[case1.js given]`

paths are relative unless beginning with a `/`

## omitting flags

`!!example[path/fileName.js]`

is a shorter equivilent to: 
 
```
## !!example[path/fileName.js title]

### Given

!!example[path/fileName.js given]

### When

!!example[path/fileName.js when]

### Then

!!example[path/fileName.js then]

```

if title is missing from `fileName.js`, the title line will be omitted from the generated doc

## markdown snippet

`!!example[path/fileName.md]`

will inject the result of recursively generating `fileName.md`

## markdown paramaters

```
## case 1

!!example[path/fileName.md case1.js]
```

any words following the file will be passed in as parameters when generating `fileName.md`

to use these paramaters, add `[paramaterIndex]` to your markdown file

```
## !!example[[0] title]
```

## The `.js` example file

the `.js` files used should include a `modules.export` of format

```
module.exports = {
    functionExample: {func: () => {}, excludeReturn: true | false},
    objectExample: {obj: {}},
    textExample: {text: ''}
};
```

### example `.js` example file

```
let given = () => {
    let list = [1, 2, 3, 4];
    return list;
};

let quadruple = list => {
    let result = list.map(num => num * 4);
    return result;
};

let add4 = list => {
    let result = list.map(num => num + 4);
    return result;
};

module.exports = {
    description: {text: 'multiplies by 4 and adds 4 to each element of an array'},
    given: {func: given, excludeReturn: true},
    step1: {func: quadruple, excludeReturn: true},
    step2: {func: add4, excludeReturn: true},
    final: {obj: add4(quadruple(given()))}
};
 ```
 
### the `then` flag
 
the `then` flag is special, in that if it's missing in the `.js` file, but accessed in the markdown, then documenter will attempt to default it as `then: {obj: when.func(given.func())}`

# Example 1 - using `!!example[.js flag]` syntax

[example .js](../examplePlain/doubler.js)

[template .md](../examplePlain/template.md)

!example[../examplePlain/template.md]

# Example 2 - using `!!example[.js]` syntax

[example .js](../exampleUnflagged/lessThan3.js)

[template .md](../exampleUnflagged/template.md)

!example[../exampleUnflagged/template.md]

# Example 3 - using `!!example[.md paramater]` syntax

[first example .js](../exampleUnflagged/process1.js)

[second example .js](../exampleUnflagged/process2.js)

[template .md](../exampleUnflagged/template.md)

[child template .md](../exampleUnflagged/templateChild.md)

!example[../exampleInjectableTemplates/template.md]
