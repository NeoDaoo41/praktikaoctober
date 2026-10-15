function countWords(str) {
    let words = str.toLowerCase().split(/\s+/);
    let result = {};

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            if (result[words[i]]) {
                result[words[i]]++;
            } else {
                result[words[i]] = 1;
            }
        }
    }

    return result;
}