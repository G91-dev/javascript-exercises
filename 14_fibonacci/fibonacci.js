const fibonacci = function(num) {
    if (typeof(num) === "string") {
        num = Number(num);
        console.log(`num era texto y ahora es ${num}`);
    }

    if (num == 0) {
        console.log(num);
        console.log(`num es 0, valor ${num}`);
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else if (num > 0) {
        let sequence = [1, 1];
        console.log(sequence);
        for (let i = 2 ; i < 30 ; i++) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        console.log(sequence);
        }
        // console.log (sequence[1], sequence[2], sequence[3], sequence[4], sequence[5]);
        return sequence[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
