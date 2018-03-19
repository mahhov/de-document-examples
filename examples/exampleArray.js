let given = () => {
    let animals = ['dog', 'cat', 'mouse'];
    return animals;
};

let when = animals => {
    let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
    return sentence;
};

module.exports = ['Animals', given, when];
