// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
 

// Constraints:

// 1 <= num <= 104
// num consists of only 6 and 9 digits.

const num = 966;


var maximub69Number = function(num){
    const maximumNumberArray = [];
    const numArray = Array.from(String(num), Number)
    for(let i = 0; i < numArray.length; i++){
         if(numArray[i] === 9){ 
            indexofNine = i;  
            const numString = String(num).substring(0, indexofNine) + '6' + String(num).substring(indexofNine + 1)
        
             maximumNumberArray.push(numString)
         }else if(numArray[i] === 6){ 
            indexofNine = i;
            const numString = String(num).substring(0, indexofNine) + '9' + String(num).substring(indexofNine + 1)
             maximumNumberArray.push(numString)
         }
    }

       maxNumber = Math.max(...maximumNumberArray.map(Number))

    return maxNumber;


}



// console.log(maximub69Number(num))

let numbers = ['666', '996', '969'];

let largestNumber = Math.max(...numbers.map(Number));
// console.log(typeof(numbers));  

const num2 = '12345';

// replace 2 wth 3 which is index 1
// console.log(num2.substring(0,1) + "3" + num2.substring(2))
// console.log(num2.substring(2))

 const numts = 'solo,'
 const numts2 = 'tahoe'
const test = (...num)=>{
    console.log(num)  
}

console.log(test(numts,numts2))