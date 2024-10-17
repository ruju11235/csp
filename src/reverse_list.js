// Implement https://github.com/ruju11235/csp/issues/9

// This function reverses the given list, xs, in place.
// If an element e was at the index i in the list before applying the function,
// it will be at the index xs.length-1-i after the function returns.
function reverse_1(xs)
{
    var i = 0;
    var length = xs.length - 1;
    while (i < length)
    {
        var temp = xs[i];
        xs[i] = xs[length];
        xs[length] = temp;
        i = i + 1;
        length = length - 1;
    }
    return xs;
}

// This function also reverses a given list but without
// the extra variable, length.
function reverse_2(xs)
{
    var i = 0;
    while (i < Math.floor(xs.length / 2))
    {
        var temp = xs[i];
        xs[i] = xs[xs.length - 1 - i];
        xs[xs.length - 1 - i] = temp;
        i = i + 1;
    }
    return xs;
}

// This function creates a list of the first 10 square numbers.
function create_list()
{
    var xs = [];
    var i = 0;
    while (i < 10)
    {
        xs[i] = (i + 1) * (i + 1);
        i = i + 1;
    }
    return xs;
}

var xs = create_list();
console.log("Original list: " , xs);
console.log(reverse_1(xs));

var ys = create_list();
console.log(reverse_2(ys))

// This function determines whether the reverse_1 and reverse_2
// return the same list. This is the testing function.
function are_equal(xs, ys)
{
    if (xs.length !== ys.length)
    {
        return false;
    }
    var i = 0;
    while (i < xs.length)
    {
        if (xs[i] !== ys[i])
        {
            return false;
        }
        i = i + 1;
    }
    return true;
}

console.log(are_equal(xs, ys));