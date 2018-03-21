let given = () => {
    let list = [1, 2, 3, 4];
    return list;
};

let quadruple = list => {
    let result = list.map(num => num * 4);
    return result;
};

let add4 = list => {
    let result = list.map(num => num + 4);
    return result;
};

module.exports = {
    description: {text: 'multiplies by 4 and adds 4 to each element of an array'},
    given: {func: given, excludeReturn: true},
    step1: {func: quadruple, excludeReturn: true},
    step2: {func: add4, excludeReturn: true},
    final: {obj: add4(quadruple(given()))}
};
