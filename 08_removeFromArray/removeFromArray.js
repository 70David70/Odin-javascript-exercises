const removeFromArray = function(array, ...nums) {
    let purified = []
    purified = array.filter( (item)=> {
        for (num of nums) {
            if (item === num) {
                return false
            }
        }
        return true
    })
    return purified
};
console.log(removeFromArray([1, 2, 3], 1, 2))

// Do not edit below this line
module.exports = removeFromArray;
