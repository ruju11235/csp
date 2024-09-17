// This program prints all factors of a given integer N.
// factoring_1.js also does that, but is slow.
// This program does it more efficiently.

var n = 44;
var i = 1;

while (2 * i <= n)
{
  if (n % i == 0)
  {
    console.log(i);
  }  
  i = i + 1;
}
console.log(n)