// Given some positive integer n, this program returns the nth Fibonacci number.
// The program is written using a function "fib".

function fib(n)
{
    if (n <= 2)
    {
        return 1;
    }
    else
    {
        return (fib(n - 1) + fib(n - 2));
    }
}

var a = 10;
var n = 1;
while (n <= a)
{
    console.log("Fib " + n + " = " + fib(n));
    n = n + 1;
}