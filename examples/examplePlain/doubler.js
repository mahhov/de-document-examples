let given = () => {
    let list = [1, 2, 3, 4];
    return list;
};

let double = list => {
    let result = list.map(num => num * 2);
    return result;
};

module.exports = {
    whatIsThis: {text: 'this is a simple exampe'},
    given: {func: given, excludeReturn: true},
    double: {func: double, excludeReturn: true},
    doubleThen: {obj: double(given())}
};
