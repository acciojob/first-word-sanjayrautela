function firstWord(str) {
    if (!str || !str.includes(' ')) {
        return str;
    } else {
        return str.split(' ')[0];
    }
}

