const ae = require('../src/index');

module.exports = ae('Animals')
    .given(() => {
        let animals = ['dog', 'cat', 'mouse'];
        return animals;
    }).when(animals => {
        let sentence = `the ${animals[0]} watched the ${animals[1]} chase the ${animals[2]}`;
        return sentence;
    });
