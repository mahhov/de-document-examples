let given = () => {
    let animals = ['dog', 'cat', 'mouse'];
    return animals;
};

let when = animals => {
    animals.forEach(animal => {
        if (animal.planet === 'earth')
            animal.safe = true;
        else
            animal.safe = animal.size < 6;
    });

    return animals;
};

module.exports = ['Animal Safety', given, when];
