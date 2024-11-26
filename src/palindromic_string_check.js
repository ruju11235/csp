// Implement https://github.com/ruju11235/csp/issues/13

// This function takes a string and returns its reverse.
function reverse(s) {
    var reversed = "";
    var i = s.length - 1;

    while (i >= 0) {
        reversed = reversed + s[i];
        i = i - 1;
    }
    return reversed;
}

// Checks if a given string is a palindrome.
// Returns true if the string is the same when reversed,
// false otherwise.
function is_palindrome_1(s)
{
    return s === reverse(s);
}

function is_palindrome_2(s)
{
    var i = 0
    var n = s.length - 1;
    while (i < n)
    {
        if (s[i] !== s[n])
        {
            return false;
        }
        i = i + 1;
        n = n - 1;
    }
    return true;
}

var s = "weryykrew";
console.log(is_palindrome_1(s));
console.log(is_palindrome_2(s));