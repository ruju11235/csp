/*
This program operates on two polynomials represented
as arrays of coefficients.
Each element in the first polynomial is multiplied by
every element in the second polynomial. The resulting polynomial
has terms equal to the product of the terms in the two polynomials.
*/

// Calculates the degree of a polynomial.
// Input: An array "cs" representing the coefficients.
// Output: An integer representing the degree of the polynomial.
function deg(cs)
{
    return cs.length - 1;
}

// This function multiplies two polynomials.
// "mr" (the multiplier) and "md" (the multiplicand) are arrays
// of coefficients representing the first polynomial.
// The function returns the array "pr" of coefficients
// representing the product of the two polynomials.
function multiply(mr, md)
{
    let d = deg(mr) + deg(md);
    // Initializes the result array with zeros
    let pr = Array(d + 1).fill(0);
    for (let i = mr.length - 1; i >= 0; i--)
    {
        for (let j = md.length - 1; j >= 0; j--)
        {
            pr[i + j] += mr[i] * md[j];
        }
    }
    return pr;
}

let mr = [2, 4];
let md = [1, 5];
console.log(multiply(mr, md));