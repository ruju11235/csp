// This program creates a histogram that counts the number of times
// of each letter in a given string "s" that contains only
// lower-case ASCII characters ("a" to "z").

// The "histogram" function takes a string "s" as an input and
// returns an array that tells the number of time each letter
// from "a" to "z".
function histogram1(s)
{
    s = s.toLowerCase();
    let letters = [];
    for (let i = 0; i < s.length; i++)
    {
        var char = s[i];
        if (char) {
            
        }
        var index = char.charCodeAt() - "a".charCodeAt();
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

function histogram2(s)
{
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 1;
        }
        else {
            freq[s[i]] += 1;
        }
    }
    return freq;
}

var s = "The quick brown fox jumps over the lazy dog";
console.log(histogram1(s));