// Calculates the equation of the linear regression given
// the coordinates of n points.
// It uses my linear regression algorithm:
// (1) calculate the slopes of all n choose 2 lines.
// (2) calculate the y-intercepts of these lines.
// (3) the slope and y-intercept of the linear regression is
// the average of all values.

/**
Finds the equations of all n choose 2 lines whose x- and y-coordinates
are given.
@param {list of numbers} xs x-coordinates
@param {list of numbers} ys y-coordinates
@param {list of numbers} ms slopes (caller has to provide)
@param {list of numbers} bs y-intercepts (caller has to provide)
Assumptions: 
(1) xs.length === ys.length
(2) xs.length >= 2
*/
function lin_equations(xs, ys, ms, bs)
{
    let n = xs.length;
    for (let i = 0; i < n - 1; i++)
    {
        for (let j = i + 1; j < n; j++)
        {
            let m = (ys[j] - ys[i])/(xs[j] - xs[i]); // xs[i] === xs[j]?
            ms.push(m);
            let b = ys[i] - m * xs[i];
            bs.push(b);
        }
    }
}

function average(xs)
{
    let sum = 0;
    let i = 0;
    let n = 0; // number of finite elements
    while (i < xs.length)
    {
        if (isFinite(xs[i]))
        {
            sum = sum + xs[i];
            n++;
        }
        i++;
    }
    return sum / n;
}

let xs = [44, 35, 20.4, 33, 31, 35, 18.5, 37, 26];
let ys = [80.5, 70.5, 57, 66, 68, 72, 52, 73.5, 53];
let ms = [];
let bs = [];
lin_equations(xs, ys, ms, bs);
let m = average(ms);
let b = average(bs);
console.log("y = " , m + "x + " , b);
