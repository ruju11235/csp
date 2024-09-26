// Implement https://github.com/ruju11235/csp/issues/3
// This program implements the "power" function.

// This function takes two numbers:
// b, a non-zero real number, and e, an integer and returns a 
// real number equal to b raised to the eth power.
function power(b, e)
{
    var j = e;
    if (e < 0)
    {
        e = -e;
    }
    var result = 1;
    var i = 0;
    
    while (i != e) 
    {
        i = i + 1;
        result = result * b;
    }
    
    if (j < 0)
    {
        return 1 / result;
    }
    else
    {
        return result;
    }   
}

var b = 4;
var e = -10;

while (e <= 10)
{
    console.log(b + "^" + e + " = " + power(b, e));
    e = e + 1;
}