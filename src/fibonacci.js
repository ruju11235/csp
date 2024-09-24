// Given some positive integer n, this program returns the nth Fibonacci number.

function fib(n)
{
    var i = 1;
    var fib1 = 1; // n + 1th Fibonacci number
    var fib2 = 1; // nth Fibonacci number
    
    while (i < n)
    {
        var t = fib2;
        fib2 = fib1;
        fib1 = fib1 + t;
        i = i + 1;
    }
    return fib2;
}

var a = 10;
var n = 1;
while (n <= a)
{
    console.log("Fib " + n + " = " + fib(n));
    n = n + 1;
}