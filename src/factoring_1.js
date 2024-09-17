// This program prints all factors of a given positive integer n.

var n = 1;
var i = 1;

while (i <= n)
{
  if (n % i == 0)
  {
    console.log(i);
  }  
  i = i + 1;
}