// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1
 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?


//solution

function addDigits(num){
 let length = String(num).split('').map(Number).length;
  if(length === 1 ){
    return num
  }
    while(length > 1){
      let sum = String(num).split('').map(Number).reduce((acc, sum) => acc + sum, 0)
        reultLenght = String(sum).split('').map(Number).length;
        length = reultLenght;
        num = sum;
    }
    
     return num
}


const num = 365;

console.log(addDigits(num))


//solution 2 

function addDigits2(num) {
    while (num >= 10) {
        num = String(num).split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    return num;
}

const num2 = 365;
console.log(addDigits2(num));