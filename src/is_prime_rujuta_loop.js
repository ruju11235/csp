// This program runs my primatlity algorithm on integers from 2 to some
// integer n and prints if each integer is prime. If it is not prime,
// it prints the smallest factor.

  var n = 11;

while (n <= 50)
{
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
   n = n + 1;
}
