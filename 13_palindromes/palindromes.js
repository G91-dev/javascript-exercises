const palindromes = function (word) {
    let normalWord = word.toUpperCase().replace(/[^1-9A-Z]/g, '');
    let reversed = "";
    for( let i = normalWord.length - 1; i >= 0 ; i--) {
        reversed = reversed + normalWord[i];
        console.log (`i = ${i} // reversed = ${reversed}`)
    }
    console.log (`normalWord = ${normalWord}`)
    console.log (`reversed = ${reversed}`)
    return reversed == normalWord;
};

// Do not edit below this line
module.exports = palindromes;
