// This program determines whether a given positive integer is prime.
// It uses a recursive function.

function is_prime(t, n)
{
    if (t * t > n)
    {
        return n > 1;
    }
    else if (n % t == 0)
    {
        return false;
    }
    else
    {
        return is_prime(t + 1, n);
    }
}
console.log(is_prime(2, 17));