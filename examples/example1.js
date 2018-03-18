const ae = require('../src/Example');

ae.given(() => {
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

    return animals;
}).when(animals => {
    animals.forEach(animal => {
        if (animal.planet === 'earth')
            animal.safe = true;
        else
            animal.safe = animal.size < 6;
    });

    return animals;
});
