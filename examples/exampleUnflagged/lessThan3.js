let given = () => {
    let list = [1, 2, 3, 4];
    return list;
};

let lessThan3 = list => {
    let result = list.filter(num => num < 3);
    return result;
};

module.exports = {
    title: {text: 'Less than 3'},
    given: {func: given, excludeReturn: true},
    when: {func: lessThan3, excludeReturn: true}
};
