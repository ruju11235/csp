// Implement https://github.com/ruju11235/csp/issues/10

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

// // This function returns a list of all binary strings
// // of length n.
// function get_binary_strings(n)
// {
//     if (n === 0)
//     {
//         return [""];
//     }
//     var p = get_binary_strings(n - 1);
//     var n = [];
    
//     insert(n, n.length - 1, s_1);
//     insert(n, n.length - 1, s_2);
//     return n;
// }

// console.log(get_binary_strings(5));

// Given a nonnegative integer n, this function
// prints all binary strings of length n.
function print_binary_strings(n, acc)
{
    if (n === 0)
    {
        console.log(acc);
    }
    else
    {
        print_binary_strings(n - 1, acc + "0");
        print_binary_strings(n - 1, acc + "1");
    }
}

print_binary_strings(2, "");