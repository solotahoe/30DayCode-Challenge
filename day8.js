// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//wrong because it time complexity is O(n log n)
// function searchInsert(nums, target){
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === target){
//             return i;
//         }
//     }
//     nums.push(target)
//     nums.sort()
//     // console.log(nums)
//     return nums.indexOf(target)
// }
// const nums = [1,3,5,6] 
// const target = 7
// console.log(searchInsert(nums, target))



///use binary search whick has a time complexity of O(log n)
function searchInsert(nums, target) {       
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

const nums = [1, 3, 5, 6];
const target = 7;
console.log(searchInsert(nums, target));


