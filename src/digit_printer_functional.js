// Implement https://github.com/ruju11235/csp/issues/7

// This function prints the digits of a given positive integer
// in the reverse order.
function print_digits_reverse(a)
{
    if (a < 10)
    {
        console.log(a);
    }
    else
    {
        var q = Math.floor(a / 10);
        var r = a % 10;
        console.log(r);
        print_digits_reverse(q);
    }
}

print_digits_reverse(1784);

// This function prints the digits of a given positive integer.
function print_digits(a)
{
    if (a < 10)
    {
        console.log(a);
    }
    else
    {
        var q = Math.floor(a / 10);
        var r = a % 10;
        print_digits(q);
        console.log(r);
    }
}

print_digits(11);