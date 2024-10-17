// Implement https://github.com/ruju11235/csp/issues/8

// This function takes a list and inserts element x in index i.
function insert(xs, i, x)
{
    if (i < 0)
    {
        return xs;
    }
    if (i > xs.length)
    {
        return xs;
    }
    var j = xs.length;
    while (j > i)
    {
        xs[j] = xs[j - 1];
        j = j - 1;
    }
    xs[i] = x;
    return xs;
}

// This function reverses the order if the elements in xs.
// It returns a new list.
// If it is empty, it returns xs.
function reverse(xs)
{
    if (xs.length == 0)
    {
        return xs;
    }
    var j = 0;
    var ys = [];
    var i = xs.length - 1;
    while (i >= 0)
    {
        ys[xs.length - 1 - i] = xs[i];
        i = i - 1;
        j = j + 1;
    }
    return ys;
}

// This function takes a decimal integer,
// and returns its representation in base 2 (binary representation).
function decimal_to_binary(n)
{
    var ds = [];
    if (n < 2)
    {
        return [n];
    }
    var i = 0;
    while (n > 0)
    {
        insert(ds, i, n % 2);
        n = Math.floor(n / 2);
        i = i + 1;
    }
    return reverse(ds);
}

console.log(decimal_to_binary(10));