# my animal sentence project

this generates a sentence about animals

# example 1 - template

yet to support no-flags js

# example 2 - custom

### given

```
    let animals = ['dog', 'cat', 'mouse'];
    animals[0] = 'alligator';
```

### when

```
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
```

### then

```
"the undefined watched the undefined chase the undefined"
```

# example 3 - inject

### given

```
    let animals = ['dog', 'cat', 'mouse'];
    animals[0] = 'alligator';
```

### when

```
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
```

### then

```
"the undefined watched the undefined chase the undefined"
```


# exmaple 4 - parmaterized

### given - parmaterized

```
    let animals = ['dog', 'cat', 'mouse'];
    animals[0] = 'alligator';
```

### when - parmaterized

```
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
```

### then - parmaterized

```
"the undefined watched the undefined chase the undefined"
```

