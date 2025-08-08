const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    
    let bigNum, smallNum;
    if (num1 >= num2) {
        bigNum = num1; smallNum = num2
    }
    else {bigNum = num2; smallNum = num1}
    
    let sum = 0;
    for (let i = smallNum; i <= bigNum; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
