function generatePassword(length) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}