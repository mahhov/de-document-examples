const ec = require('../../src/exampleCreator');

module.exports = ec('Animal Example #2')
    .given(() => {
        let animals = ['dog', 'cat', 'mouse'];
        animals[0] = 'eggplant';
        return animals;
    }).when(animals => {
        let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
        return sentence;
    });
