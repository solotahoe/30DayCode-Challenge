// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9


function countOdds(low, high){
const inRange = []
    for(let i  = low; i <= high; i++){
     if( i % 2 !== 0){
        inRange.push(i)
     }
    }
    return inRange.length
    
}


console.log(countOdds(8,10))



//SOLUTION B

function countOdds2(low, high) {
    // If low is odd, there will be (high - low + 1) / 2 odd numbers between low and high, else it will be (high - low) / 2
    return Math.floor((high - low + (low % 2)) / 2);    
}

// Example usage:
let low1 = 3;
let high1 = 7;
console.log(countOdds2(low1, high1));  // Output: 3



