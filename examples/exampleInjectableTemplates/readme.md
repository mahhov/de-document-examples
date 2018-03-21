# Injectable, Reusable, & Paramterized Markdowns

## Example 1

### Description

multiplies by 3 and adds 10 to each element of an array

### Given

```
    let list = [1, 2, 3, 4];
```

### First we

```
    let result = list.map(num => num * 3);
```

### Then we

```
    let result = list.map(num => num + 10);
```

### And we get

```
[
  13,
  16,
  19,
  22
]
```


## Ecample 2, reusing same template

### Description

multiplies by 4 and adds 4 to each element of an array

### Given

```
    let list = [1, 2, 3, 4];
```

### First we

```
    let result = list.map(num => num * 4);
```

### Then we

```
    let result = list.map(num => num + 4);
```

### And we get

```
[
  8,
  12,
  16,
  20
]
```
