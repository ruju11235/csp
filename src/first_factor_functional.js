// This program finds the first factor of the given positive integer.
// Using that, it determines if the number is prime.
// It uses a recursive function similar to is_prime_functional.js.


// first_factor: returns the first factor of n >= 1
function first_factor(t, n)
{
    if (t * t > n)
    {
        return n;
    }
    else if (n % t == 0)
    {
        return t;
    }
    else
    {
        return first_factor(t + 1, n);
    }
}

// is_prime: returns true if n is prime, false otherwise
function is_prime(n)
{
    if (first_factor(2, n) == n)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var n = 5777;
console.log("The first factor of " + n + " = " + first_factor(2, n));
console.log("Is " + n + " prime? " + is_prime(n));