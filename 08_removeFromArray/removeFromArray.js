const removeFromArray = function(array, ...nums) {
    let indices  = []
    for (num of nums) {
        indices .push(array.indexOf(num))
    }
    let numberOfElements = nums.length
    array.splice(indices , numberOfElements)
    return array
};
console.log(removeFromArray([1, 2, 3], 1, 2))

// Do not edit below this line
module.exports = removeFromArray;
