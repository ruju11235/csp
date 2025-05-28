/*
This is an implementation of the basic greedy algorithm.
The greedy algorithm may not always yield the minimum solution for all coin systems.
*/

// The array 'coins' is an array of coin denominations
// (that is assumed to be sorted from largest to smallest).
// The second paramerter (goal) is the target number to make using the coins.
// Returns an array where each element at index i represents the number
// of coins of denomination coins[i] used.
function be_greedy(coins, goal)
{
    let remainder = goal;
    let n = 0;
    let result = Array(coins.length).fill(0);
    for (let i = 0; i < coins.length; i++)
    {
        result[i] = Math.floor(remainder / coins[i]);
        remainder %= coins[i];
        n += result[i];
    }
    return result;
}

let coins = [21, 17, 6, 3, 2, 1];
console.log(be_greedy(coins, 4));