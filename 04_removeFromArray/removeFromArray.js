const removeFromArray = function(array, ...el) {
    let result = [];
    array.forEach((item) => {
        if (!el.includes(item)) {
            result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
