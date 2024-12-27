// This program creates a histogram that counts the number of times
// of each letter ("a" to "z") in a given string "s".

// The "histogram" function takes a string "s" as an input and
// returns an array that tells the number of time each letter
// from "a" to "z".
function histogram(s)
{
    let letters = [];
    for (let i = 0; i < s.length; i++)
    {
        var char = s[i];
        var index = char.charCodeAt() - "a".charCodeAt();
        // Initializes index to 0 if undefined, then increment
        if (!letters[index])
        {
            letters[index] = 0;
        }
        letters[index]++;
    }
    // Ensures that all indices (0-25) exist.
    // If they don't, they are initialized to 0.
    for (let i = 0; i < 26; i++)
    {
        if (!letters[i])
        {
            letters[i] = 0;
        }
    }

    return letters;
}

var s = "hellooooo";
console.log(histogram(s));