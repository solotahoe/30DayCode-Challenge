// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.   


const sumOfUnique =function(nums){
   const uniqueNums = new Map();
   let count = 1
   for(let num of nums){
    if(uniqueNums.has(num)){ 
        let getCount = uniqueNums.get(num)
        uniqueNums.set(num, ++getCount)
    }else{
        uniqueNums.set(num, count)
    }
   }
   const allEnteries = uniqueNums
      console.log(allEnteries.entries())
   let sum = 0;
   for (const [num, count] of allEnteries.entries()) {           
    console.log('num is==============', num, 'and===================', "count is", count, '=======================')
       if (count === 1) {
           sum += num;
       } 
   }

   return sum;     
}




const arr = [1,2,3,2]

console.log(sumOfUnique(arr))

countMap.set(num, (countMap.get(num) || 0) + 1);  
