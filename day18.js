// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).



function removeDuplicates(nums) {
    if (nums.length <= 2) return nums.length; // No need to remove duplicates if length is less than or equal to 2

    let index = 2; // Start from the third element
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[index - 2]) {
            nums[index] = nums[i]; // Update the element at index if it's different from the element two positions back
            index++;
        }
    }
    return index; // Return the new length after removing duplicates
}

// Test cases
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1); // k1 should be 5, nums1 should be [1, 1, 2, 2, 3, ...]
console.log(k1); // Output: 5
console.log(nums1); // Output: [1, 1, 2, 2, 3, 3]

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2); // k2 should be 7, nums2 should be [0, 0, 1, 1, 2, 3, 3, ...]
console.log(k2); // Output: 7
console.log(nums2); // Output: [0, 0, 1, 1, 2, 3, 3, 3, 3] (assuming the rest of the array is filled with elements)  


