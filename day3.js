// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104



const reverseString = (s,k)=>{
   const stringLength = s.length; 
   let reversed=''; 
   let i = 0;
   while(i < stringLength){
    let reversedTwoLetters = s.substr(i, k).split("").reverse().join('');
     reversed += reversedTwoLetters;
     reversed += s.substr(i+k, k)
     i += 2*k;

     //add the other letters left

   } 
   
   return reversed;
}

const array = "abcdefg"
//   console.log(array.substring(4,2))
console.log(reverseString('abcdefg', 2))    