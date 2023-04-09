const stringReduction = (str) => {
    const pairs = {
        "ab" : "c",
        "cb" : "a",
        "ac" : "b",
        "ba" : "c",
        "ca" : "b",
        "bc" : "a",
    }

    let newStr = str

    for (let key in pairs) {
        const i = newStr.indexOf(key);

        if(i > -1) {
            newStr = newStr.slice(0, i) + pairs[key] + newStr.slice(i + 2, -1);
        }
    }

    return newStr;
}

console.log(stringReduction("abc"));
