const getTheTitles = function(arr) {
    let arrOfTitle = [];
    for (let i = 0; i < arr.length; i++) {
        arrOfTitle.push(arr[i].title);
    }
    return arrOfTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
