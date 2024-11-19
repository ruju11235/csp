
function max_fraction(n)
{
    return 1 - Math.pow(1/2, n);
}

console.log(max_fraction(16)); // 0.9999847412109375
// 32767.9999847412109375

console.log(max_fraction(15)); // 0.999969482421875

console.log(max_fraction(16) - max_fraction(15));
// 0.0000152587890625