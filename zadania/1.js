const Fill = (arr, value) => {
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            arr.push(value[i]);
        }
    } else {
        arr.push(value);
    }
    return arr;
};