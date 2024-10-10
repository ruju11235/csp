// Implement https://github.com/ruju11235/csp/issues/7

function print_list(ds)
{
    var i = ds.length - 1;
    while (i >= 0)
    {
        console.log(ds[i]);
        i = i - 1;
    }
}

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
    console.log(a);
    print_list(ds);
}

print_digits(9);