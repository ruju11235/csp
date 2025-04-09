/*
Performs a deep comparison between two values.
It checks if the values are strictly equal,
or if they are objects with the same keys and deeply equal values.
It is a recursive function. It returns true
if the two inputs are deeply equal, and false otherwise.
*/

function deepEqual(a, b)
{
    if (a === b)
    {
        return true;
    }
    if (a === null || b === null)
    {
        return false;
    }
    if (typeof a == "object" && typeof b == "object")
    {
        let keysa = Object.keys(a);
        let keysb = Object.keys(b);
        if (keysa.length !== keysb.length)
        {
            return false;
        }
        for (let i = 0; i < keysa.length; i++)
        {
            let inner_comparison = deepEqual(a[keysa[i]], b[keysa[i]]);
            if (!inner_comparison)
            {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(deepEqual(1, 2));