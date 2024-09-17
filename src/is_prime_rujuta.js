// This program takes some integer n and
// determines whether it is prime or composite.
// I created an algorithm to solve this problem using a flow chart.

var n = 1007;
var i = 2;

while (((n % i) != 0) && (i * i <= n))
{
 i = i + 1;
}

if (n % i == 0) 
{
  if (n == 2) 
  {
    console.log(n + " is prime!");
  }
  else 
  {
    console.log(n + " is not prime because " + i + " is a factor!");
  }
}
if (i * i > n)
{
  console.log(n + " is prime!");   
}