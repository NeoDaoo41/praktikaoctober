function sumAndAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = arr.length > 0 ? sum / arr.length : 0;

    return {
        sum: sum,
        average: average
    };
}