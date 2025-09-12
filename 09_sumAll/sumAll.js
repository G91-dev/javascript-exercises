const sumAll = function(a, b) {
    if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        let minNum = Math.min(a, b);
        let maxNum = Math.max(a, b);
        let result = 0;
        for(let i = minNum; i <= maxNum; i++) {
            result = result + i;
            console.log("i = " + i);
            console.log("result = " + result);
        }
        return result;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
