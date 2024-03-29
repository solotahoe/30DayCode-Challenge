// You have n coins and you want to build a staircase with these coins. 
// The staircase consists of k rows where the ith row has exactly i coins. 
// The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.


// Example 2:

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

const staircaseCoins = (n)=>{
    let coins = n;
   let complete = 0;
   let currentRow = 1;

   while(coins > currentRow){
     complete += 1;
     coins -= currentRow;
     currentRow += 1;
   }

 return complete;
}

console.log(staircaseCoins(5));






