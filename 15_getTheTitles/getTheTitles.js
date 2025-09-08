const getTheTitles = function(input) {
    let array = []
    input.forEach(element => {
        array.push(element.title)
    });
    return array
};

// Do not edit below this line
module.exports = getTheTitles;
