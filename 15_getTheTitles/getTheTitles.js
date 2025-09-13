const getTheTitles = function(arr) {
    console.log(arr);
    let titlesArray = [];
    for (let i = 0 ; i < arr.length; i++) {
    titlesArray.push(arr[i].title);
    console.log(titlesArray);
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
