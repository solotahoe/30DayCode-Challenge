// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.


function singleNumber(nums){
    const newMap = new Map();
    let times = 1;
    let once;
   for(let i = 0; i < nums.length; i++){
     if(newMap.has(nums[i])){
        // console.log(`new map has`, nums[i], '=======================')
        let count = newMap.get(nums[i])
        newMap.set(nums[i], ++count)
     }else{
        newMap.set(nums[i], times)
     }
    }
    for (const [nums, count] of newMap.entries()){
    //    console.log(nums)
       if(count ===1){
        once = nums
       }
    }
  return once
}

const numsArray = [0,1,0,1,0,1,99];

console.log(singleNumber(numsArray))


/// solution 2 using bitwise



function singleNumber2(nums) {
    let ones = 0, twos = 0;
   
    for (let num of nums) {
        // console.log(num)
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    console.log('ones ======', ones)
    console.log('twos ======', twos)
    return ones;
}

const numsArray2 = [0, 1, 0, 1, 0, 1, 99];
console.log(singleNumber2(numsArray));









