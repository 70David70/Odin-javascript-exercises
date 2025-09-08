const palindromes = function (string) {
    let array = string.toLowerCase().match(/[a-z0-9]/gi);
    let j = array.length - 1;

    for (let i = 0; i < j; i++, j--) {
        if(array[i] !== array[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
