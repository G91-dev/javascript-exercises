const reverseString = function(string) {
    console.log("string: " + string);
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    console.log("i: " + i);
    reversed = reversed + string[i];
    console.log("reversed: " + reversed);
}

return reversed;
};

// Do not edit below this line
module.exports = reverseString;
