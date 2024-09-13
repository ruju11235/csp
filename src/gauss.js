// This program takes some positive integer n 
// and sums all integers from 1 to n.

var n = -1;
var sum = 0;
var i = 1;
while (i <= n)
{
    sum = sum + i;
    i = i + 1;
}
console.log(sum);

if (sum == (n * (n + 1)) / 2)
{
    console.log("Gauss was right!");
}
else
{
    console.log("Gauss was wrong :(");
}
