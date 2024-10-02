// Implement https://github.com/ruju11235/csp/issues/5

// This function inserts x at the index i (0 <= i < = xs.length) of xs.
// After the function has returned, xs[i] should equal x.
// Returns true if the list is modified, false otherwise.
function insert(xs, i, x)
{
    if (i > xs.length)
    {
        return false;
    }
    var length = xs.length;
    while (length >= i)
    {
        xs[length] = xs[length - 1];
        length = length - 1;
    }
    xs[i] = x;
    return true;
}

var xs = [1, 2, 3, 1];

insert(xs, 2, 10);
console.log(xs);

insert(xs, 0, 11);
console.log(xs);

insert(xs, 6, -5);
console.log(xs);

insert(xs, 8, 100);
console.log(xs);

xs = [1];
insert(xs, 1, 2);
console.log(xs);