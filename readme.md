# de-document-examples

Automatically insert and updating examples in your markdown.

# installation

`npm install -save-dev de-document-examples`

# usage overview

1. create a template markdown file

2. where you want to include an example in your markdown, add the following `!example[Array] pathToMyExample/myExample.js`
    - paths can be relative to your template markdown (e.g. `./myExample.js`)
    - or absolute (e.g. `/users/my-name/my-documents/my-examples/myExample.js`)

3. create your examples file

4. run `node `

## example template markdown

```markdown
# my animal sentence project

this generates a sentence about animals

# examples

!example[Array] example.js
```

## example `example.js`
```javascript
let given = () => {
    let animals = ['dog', 'cat', 'mouse'];
    animals[0] = 'alligator';
    return animals;
};

let when = animals => {
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
    return sentence;
};

module.exports = ['Animal Example #1', given, when];
```
## the generated markdown

```markdown
# my animal sentence project

this generates a sentence about animals

# examples

## Animal Example #1

### Given

```
    let animals = ['dog', 'cat', 'mouse'];
    animals[0] = 'alligator';
```

### When

```
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
```

### Then

```
"the alligator watched the cat chase the mouse"
```
```
