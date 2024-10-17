// Implement https://github.com/ruju11235/csp/issues/8

// This function takes a list and inserts element x in index i.
// Shifts all elements at index >= i to the right.
// Returns the same list.
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

// This function takes a decimal integer,
// and returns its representation in base 2 (binary representation).
function decimal_to_binary(n)
{
    if (n < 2)
    {
        return [n];
    }
    else
    {
        ds = decimal_to_binary(Math.floor(n / 2));
        insert(ds, ds.length, n % 2);
        return ds;
    }
}

console.log(decimal_to_binary(8));

// This function tests
function binary_to_decimal(ds)
{
    var sum = 0;
    var i = ds.length - 1;
    var p = 1;
    while (i >= 0) {
        sum = sum + p * ds[i];
        i = i - 1;
        p = 2 * p;
    }
    return sum;
}

console.log(binary_to_decimal([1, 0, 0, 0]));
