let given = () => {
    let list = [1, 2, 3, 4];
    return list;
};

let tripple = list => {
    let result = list.map(num => num * 3);
    return result;
};

let add10 = list => {
    let result = list.map(num => num + 10);
    return result;
};

module.exports = {
    given: {func: given, excludeReturn: true},
    step1: {func: tripple, excludeReturn: true},
    step2: {func: add10, excludeReturn: true},
    final: {obj: add10(tripple(given()))}
};
