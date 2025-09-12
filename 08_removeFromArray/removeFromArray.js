const removeFromArray = function(arr, ...arg) {
    if(arg.length <= 0) {
        return "Error"
    }

    else {
        for (let i = 0; i < arg.length ; i++) {
            console.log("arr = " + arr);
            console.log("taking out " + arg[i]);
            let index = arr.indexOf(arg[i]);
            if (index < 0) {continue}
            else {
                for (index ; index >= 0;) {
                    console.log("index = " + index);
                    arr.splice(index,1);
                    console.log("arr after taking out " + arg[i] + " = "+ arr);
                    index = arr.indexOf(arg[i]);
                }
            }
        }
        return arr
    }
};

removeFromArray([1, 2, 3, 4, 5, 6, 7, 3], 3);

// Do not edit below this line
module.exports = removeFromArray;