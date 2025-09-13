const convertToCelsius = function(degrees) {
  result = Math.round(((degrees - 32) * (5/9))*10)/10;
  return result;
};

const convertToFahrenheit = function(degrees) {
  result = Math.round((degrees * (9/5) + 32)*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
