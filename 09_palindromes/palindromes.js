const palindromes = function (word) {
    word = word.toLowerCase().replace(/[\W_]/g, '');
    reverseWord = word.split('').reverse().join('');
    return word === reverseWord; 
};

// Do not edit below this line
module.exports = palindromes;
