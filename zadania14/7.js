function secondMax(arr) {
    let numbers = [...new Set(arr)];
    numbers.sort((a, b) => b - a);

    if (numbers.length < 2) {
        return null;
    }

    return numbers[1];
}