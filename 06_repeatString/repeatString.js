const repeatString = function(string, num) {
   let joinedString = []
   for(let i = 0; i < num; i++) {
    joinedString.push(string);
   }
   return joinedString.join('')
};

// Do not edit below this line
module.exports = repeatString;
