const findTheOldest = function(arr) {
    let years = [];
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i].yearOfDeath = new Date().getFullYear();
        }
        years.push(arr[i].yearOfDeath - arr[i].yearOfBirth);
    }
    years.forEach(year => {
        if (year > number) {
            number = year;
        }
    });
    let oldest = years.indexOf(number);
    return arr[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
