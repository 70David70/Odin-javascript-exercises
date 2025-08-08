const convertToCelsius = function(fahr) {
  //return fahr % 2 === 0 ? fahr - 32 : (fahr - 32).toFixed(1)
  let converted = (fahr - 32) * 5 / 9;
  return converted % 2 === 0 ? parseFloat(converted) : parseFloat(converted.toFixed(1))

};

const convertToFahrenheit = function(cel) {
  // return cel % 2 === 0 ? cel + 32 : (cel + 32).toFixed(1)
  let converted = (cel * 9 / 5) + 32;
  return converted % 2 === 0 ? parseFloat(converted) : parseFloat(converted.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
