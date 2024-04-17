const fibonacci = function(fib) {
    fib = +fib;
    if (fib === 0) return 0;
    if (fib < 0) return 'OOPS';
    return fib === 1 || fib === 2 ? 1:
            fibonacci(fib-1) + fibonacci(fib - 2);
};

// Do not edit below this line
module.exports = fibonacci;
