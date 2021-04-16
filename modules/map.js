function map(array, key) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        result[array[i][key]] = array[i];
    }
    return result;
}

export default map;