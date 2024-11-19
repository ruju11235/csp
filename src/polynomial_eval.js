// Implement https://github.com/ruju11235/csp/issues/11

// Evaluates a given polynomial when applied to
// a list of coefficients cs and real number a.
function evaluate(cs, a)
{
    var i = 0;
    var sum = 0;
    var power_of_a = 1;
    while (i < cs.length)
    {
        sum = sum + cs[i] * power_of_a;
        i = i + 1;
        power_of_a = power_of_a * a;
    }
    return sum;
}

var cs = [1, -2, 1];
console.log(evaluate(cs, 1.1));