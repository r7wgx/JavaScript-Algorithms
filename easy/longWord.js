// Coderbyte Longest Word Algorithm Challange

function longestWord(str) {

    let arr = str.replace(/[^a-zA-z ]/g, "").split(" ")

    arr.sort((a, b) => b.length - a.length)

    return arr[0]
}


console.log(longestWord("fun&! time"));