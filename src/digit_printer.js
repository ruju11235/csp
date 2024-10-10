// Implement https://github.com/ruju11235/csp/issues/7

// This function takes a list and prints its elements in reverse order.
function print_list(ds)
{
    var i = ds.length - 1;
    while (i >= 0)
    {
        console.log(ds[i]);
        i = i - 1;
    }
}

// This function prints the digits of a given positive integer.
function print_digits(a)
{
    var ds = [];
    var i = 0;
    while (a >= 10)
    {
        ds[i] = a % 10;
        a = Math.floor(a / 10);
        i = i + 1;
    }
    ds[i] = a;
    print_list(ds);
}

print_digits(1784);