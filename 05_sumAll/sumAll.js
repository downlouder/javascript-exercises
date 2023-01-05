const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (num1 > num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    let result = 0;
    for (num1; num1 <= num2; num1++) {
        result += num1;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
