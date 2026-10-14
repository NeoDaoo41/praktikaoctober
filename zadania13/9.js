function isPalindrome(str) {
    str = str.toLowerCase()
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}