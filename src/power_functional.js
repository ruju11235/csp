// Implement https://github.com/ruju11235/csp/issues/3
// This program implements the "power" function.


// This recursive function takes two numbers:
// b, a non-zero real number, and e, an integer and returns a 
// real number equal to b raised to the eth power.
function power(b, e)
{
    if (e === 0)
    {
        return 1;
    }
    else if (e > 0)
    {
        return b * power(b, e - 1);
    }
    else
    {
        return 1 / power(b, -e);
    }
}

// powers of 4 from -10 to 10
var b = 4;
var e = -10;

while (e <= 10)
{
    console.log(b + "^" + e + " = " + power(b, e));
    e = e + 1;
}

// console.log(power(1, 1000000));