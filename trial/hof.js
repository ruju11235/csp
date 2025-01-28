// Learning about higher-order functions

function repeat(n, what)
{
    for (let i = 0; i < n; i++)
    {
        what(i);
    }
}

repeat(10, console.log);

let labels = [];
function push(n) {
    // labels.push("Unit: " + (n + 1));
    labels.push(`Unit: ${n + 1}`);
}

repeat(5, push);
console.log(labels);

function fac(n)
{
    if (n === 0)
    {
        return 1;
    }
    else
    {
        return n * fac(n - 1);
    }
}

repeat(3, fac); // this doesn't do anything!

function greaterThan(n)
{
    // return m => m > n;
    return function (m)
    {
        return m > n;
    };
}

console.log(greaterThan(5)(3));

function forEach(xs, consumer)
{
    for (let i = 0; i < xs.length; i++)
    {
        consumer(xs[i]);
    }
}

function print_sq(n)
{
    console.log(n * n);
}

forEach([1, 2, 3], print_sq);