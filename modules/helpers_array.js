export function mapArray(array, key) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        result[array[i][key]] = array[i];
    }
    return result;
}

export function getValue(array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i][key]);
    }
    return res;
}
