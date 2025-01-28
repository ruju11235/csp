/*
Exploring if a parabola passes through every three points
with distinct x- and y-coordinates.
*/

function find_abc(x1, y1, x2, y2, x3, y3)
{
    let coeffs = [];
    let a = ((y1 - y2) * (x2 - x3) - (y2 - y3) * (x1 - x2)) / ((x1 - x2) * (x2 - x3) * (x1 - x3));
    coeffs.push(a);
    let b = ((y1 - y2) - a * (x1 * x1 - x2 * x2)) / (x1 - x2);
    coeffs.push(b);
    let c = y1 - a * x1 * x1 - b * x1;
    coeffs.push(c);
    return coeffs;
}

console.log(find_abc(5, 7, 2, 10, -3, 4));