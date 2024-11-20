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
function is_palindrome(s)
{
    return s === reverse(s);
}

var s = "redivider";
console.log(is_palindrome(s));