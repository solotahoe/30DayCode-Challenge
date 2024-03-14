// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

///this solution has a time complexity of 0(n) but uses extra space which goes against the requirements of the problem statement
function findDuplicates(nums){
    const map = new Map();
    let times = 1;
    let newArray = [];
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
        let count = map.get(nums[i]);
        map.set(nums[i], ++count)
    }else{
        map.set(nums[i], times)
    }
  }
  for (const [nums, count] of map.entries()){
   if(count === 2){
     newArray.push(nums)
   }

  }
    return newArray

}    

const nums = [1,1,2];
// console.log(findDuplicates(nums))


// solution 2
//has a time complexity of 0(n) and uses only constant extra space i.e 0(1); CORRECT IMPLEMENTATION OF THIS PROBLEM
//cyclic algorithm
function findDuplicates2(nums) {   
    const duplicates = [];
    let i = 0;
    while (i < nums.length) {  
        console.log(i)
        if (nums[i] !== i + 1) {  
            const correctIndex = nums[i] - 1;
            if (nums[correctIndex] === nums[i]) {
                if (!duplicates.includes(nums[i])) {
                    duplicates.push(nums[i]);
                }
                i++;
            } else {
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            }
        } else {
            i++;
        }
    }

    return duplicates;
}

// Example usage:
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates2(nums1));  // Output: [2, 3]

const nums2 = [1, 1, 2];
// console.log(findDuplicates2(nums2));  // Output: [1]

const nums3 = [1];
// console.log(findDuplicates2(nums3));  // Output: []





 