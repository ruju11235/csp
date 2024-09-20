// This program finds the factorial of a given integer using functions.
// It uses a functional style, not an imperative one.

function fac(n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n * fac(n - 1);
    }
}
console.log(fac(5));