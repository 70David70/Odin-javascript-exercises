const findTheOldest = function(obj) {
    let oldestAge = 0;
    let oldest;
    obj.forEach(person => {
        let currentAge;
        if (person.yearOfDeath) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }
        else{
            currentAge = (new Date().getFullYear()) - person.yearOfBirth;
            console.log(currentAge)
        }

        if ( currentAge > oldestAge) {
            oldest = person;
            oldestAge = currentAge;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
