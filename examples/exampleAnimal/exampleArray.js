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
