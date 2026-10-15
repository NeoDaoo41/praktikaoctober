function shortName(fullName) {
    let parts = fullName.trim().split(/\s+/);

    return parts[0] + " " +
        parts[1][0] + "." +
        parts[2][0] + ".";
}
