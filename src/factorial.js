//

function fac(n)
{
    var i = 1;
    var pro = 1;
    while (i <= n)
    {
        pro = pro * i;
        i = i + 1;
    }
    return (pro);
}

console.log("factorial of 5 = " + fac(5));