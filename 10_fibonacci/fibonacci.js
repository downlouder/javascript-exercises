const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 1) {
        return "OOPS";
    }
    else {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;    
    }
};

// Do not edit below this line
module.exports = fibonacci;
