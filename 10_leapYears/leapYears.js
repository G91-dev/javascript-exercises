const leapYears = function(year) {
    let result = false;
    if(Number.isInteger(year/4)) {result = true};
    if(Number.isInteger(year/100)) {result = false};
    if(Number.isInteger(year/400)) {result = true};
    return result;
};

// Do not edit below this line
module.exports = leapYears;
