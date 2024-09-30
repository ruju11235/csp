// Implement https://github.com/ruju11235/csp/issues/4


function total(s)
{
    var sum = 0;
    var i = 0;
    while (i < (s.length))
    {
        sum = sum + s[i];
        i = i + 1
    }
    return sum;
}

var s = [12, 10, 41, 13];
console.log(total(s));

// That takes care of part 1 of issue #4.

// To make use of the function total to sum numbers from 1 to 100,
// I can create another list with all the 100 numbers and
// and apply total to that list. But that would tedious.

// Instead, I decided to create that list using a loop.
var n = 100;
var t = 1;
var xs = [];
while (t <= n) 
{
    xs[t - 1] = t;
    t = t + 1;
}
console.log(total(xs));