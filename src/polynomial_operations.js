/*
This program has a set of functions to perform basic polynomial arithmetic operations.
Each polynomial is represented as an array of coefficients,
where the index corresponds to the power of the variable.
There are functions for calculating the degree of a polynomial, addition, subtraction, multiplication, and division of polynomials.
*/

// Calculates the degree of a polynomial.
// Input: An array "cs" representing the coefficients.
// Output: An integer representing the degree of the polynomial.
function deg(cs)
{
    return cs.length - 1;
}

// This function adds two arrays (polynomials): cs, and ds.
// It returns a new array containing the element-wise sum of the two inputs.
// It iterates through both arrays, adding corresponding elements together.
// If the arrays have different lengths, the remaining elements
// from the longer array are appended to the result array unchanged.
function add(cs, ds)
{
    let max = Math.max(cs.length, ds.length);
    let min = Math.min(cs.length, ds.length);
    let sum = [];
    for (let i = 0; i < min; i++)
    {
        sum.push(cs[i] + ds[i]);
    }
    let sa = cs.length > ds.length ? cs : ds;
    for (let i = min; i < max; i++)
    {
        sum.push(sa[i]);
    }
    return sum;
}

// This function subtracts two arrays (polynomials): cs, and ds.
// It returns a new array containing the element-wise difference of the two inputs.
// It iterates through both arrays, subtracting corresponding elements together.
// If the arrays have different lengths, the extra elements
// from the longer array are appended to the result array.
// However, if the second array (ds) is longer,
// its extra elements are negated before being pushed to the result array.
function subtract(cs, ds)
{
    let max = Math.max(cs.length, ds.length);
    let min = Math.min(cs.length, ds.length);
    let difference = [];
    for (let i = 0; i < min; i++)
    {
        difference.push(cs[i] - ds[i]);
    }
    let sa = cs.length > ds.length ? cs : ds;
    let sign = cs.length >= ds.length ? 1 : -1;
    for (let i = min; i < max; i++)
    {
        difference.push(sa[i] * sign);
    }
    return difference;
}

// This function multiplies two polynomials.
// Each element in the first polynomial is multiplied by
// every element in the second polynomial. The resulting polynomial
// has terms equal to the product of the terms in the two polynomials.
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

// This function performs polynomial long division.
// A: An array of coefficients representing the dividend polynomial.
// B: An array of coefficients representing the divisor polynomial.
// The output is an array containing two elements:
// The first is an array representing the quotient polynomial.
// The second is the modified array A, which is now the remainder polynomial.
// The function repeatedly subtracts multiples of the divisor
// from the dividend to eliminate the highest degree terms.
// Note: The input array A is modified directly during the operation.
function divide(A, B)
{
    let i = deg(A);
    let j = deg(B);
    let Q = Array(i - j + 1).fill(0);
    while (i >= j)
    {
        Q[i - j] = A[i] / B[j];
        for (let k = j; k >= 0; k--)
        {
            A[k + i - j] -= B[k] * Q[i - j];
        }
    i--;
    }
    return [Q, A];
}

let mr = [7, -1, 2, 4];
let md = [3, 0, 8, 0, 5];
console.log(add(mr, md));
console.log(subtract(mr, md));
console.log(multiply(mr, md));
console.log(divide(mr, md)); // Returns [quotient, remainder (R)]