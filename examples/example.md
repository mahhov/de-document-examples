# hi there elephant

## Animal Safety

### Given

```

        let dog = {
            size: 3,
            sound: 'bark',
            planet: 'earth',
            description: 'smelly'
        };

        let cat = {
            size: 3,
            sound: 'purr',
            planet: 'earth',
            description: 'tasty'
        };

        let joojoo = {
            size: 8,
            sound: 'joououooouuuiiuuouo',
            planet: 'Jupiter',
            description: 'superior being',
        };

        let animals = [dog, cat, joojoo];

        
```

### When

```

        animals.forEach(animal => {
            if (animal.planet === 'earth')
                animal.safe = true;
            else
                animal.safe = animal.size < 6;
        });

        
```

### Then

```
[
  {
    "size": 3,
    "sound": "bark",
    "planet": "earth",
    "description": "smelly",
    "safe": true
  },
  {
    "size": 3,
    "sound": "purr",
    "planet": "earth",
    "description": "tasty",
    "safe": true
  },
  {
    "size": 8,
    "sound": "joououooouuuiiuuouo",
    "planet": "Jupiter",
    "description": "superior being",
    "safe": false
  }
]
```



# hi there hippo

## Animal Safety

### Given

```

    let dog = {
        size: 3,
        sound: 'bark',
        planet: 'earth',
        description: 'smelly'
    };

    let cat = {
        size: 3,
        sound: 'purr',
        planet: 'earth',
        description: 'tasty'
    };

    let joojoo = {
        size: 8,
        sound: 'joououooouuuiiuuouo',
        planet: 'Jupiter',
        description: 'superior being',
    };

    let animals = [dog, cat, joojoo];

    
```

### When

```

    animals.forEach(animal => {
        if (animal.planet === 'earth')
            animal.safe = true;
        else
            animal.safe = animal.size < 6;
    });

    
```

### Then

```
[
  {
    "size": 3,
    "sound": "bark",
    "planet": "earth",
    "description": "smelly",
    "safe": true
  },
  {
    "size": 3,
    "sound": "purr",
    "planet": "earth",
    "description": "tasty",
    "safe": true
  },
  {
    "size": 8,
    "sound": "joououooouuuiiuuouo",
    "planet": "Jupiter",
    "description": "superior being",
    "safe": false
  }
]
```


