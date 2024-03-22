// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


//THIS SOLUTION HAS A TIME COMPLEXITY OF O(n^2)  because of the splice operation
// inside the loop. Splicing an array at an 
//arbitrary index is inefficient because it
// requires shifting all subsequent elements. Instead, 
//you could use two pointers approach to achieve O(n) time complexity 

function moveZeros(nums){
 if(nums.length === 1 && nums[0] === 0){
    return nums
 }
 let i = 0;
 let zeros = 0;
while(i < nums.length){
   // console.log(nums[i])
   if(nums[i] === 0){
      zeros++
      nums.splice(i , 1)  
   }
   i++
}
nums = nums.concat(Array(zeros).fill(0))
 return nums
}

let nums = [20,1,0,0,0,0,0,4,0,3,12]
// console.log(moveZeros(nums))


// two pointers approach to achieve O(n) time complexity 

function moveZeros2(nums) {
   let left = 0; // Pointer for non-zero elements
   let right = 0; // Pointer for all elements
   
   while (right < nums.length) {
       // If the current element is non-zero, swap it with the left pointer
       if (nums[right] !== 0) {
           // Swap nums[left] and nums[right]
           let temp = nums[left];
           nums[left] = nums[right];
           nums[right] = temp; 
           // Move the left pointer forward    
           left++;
       }  
       
       // Move the right pointer forward
       right++;
   }
   
   return nums;
}

let nums2 = [20, 1, 0, 0, 0, 0, 0, 4, 0, 3, 12];
console.log(moveZeros2(nums));

