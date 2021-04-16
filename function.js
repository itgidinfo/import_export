function getValue(array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i][key]);
    }
    return res;
}