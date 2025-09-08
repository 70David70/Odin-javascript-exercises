const fibonacci = function(length) {
    if (length < 0) return "OOPS";
    else if (length == 0) return 0;
    
    let numbers = [1];
    for (let i = 1; i < length; i++) {
        if (i == 1) numbers.push(1)
        else numbers.push((numbers[i - 1] + numbers[i - 2]))
    }
    return numbers[length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
