// This function takes a string and returns its reverse. 
// It goes through the string from the end to the start, 
// adding each character to a new, reversed string.
function reverse(s)
{
    var s_reverse = "";
    var i = s.length - 1;
    while (i >= 0)
    {
        s_reverse = s_reverse + s[i];
        i = i - 1;
    }
    return s_reverse;
}

var s = "rev";
console.log(reverse(s));