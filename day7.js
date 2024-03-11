// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.



// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
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

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If the array is empty, there are no unique elements
    
    let uniqueIndex = 0; // Initialize a pointer to keep track of the position for the next unique element
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one, update the uniqueIndex
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            // Place the unique element at the correct position
            nums[uniqueIndex] = nums[i];
        }
    }
    
    // Return the count of unique elements (uniqueIndex + 1)
    return uniqueIndex + 1;
}

// Test cases
// let nums1 = [1, 1, 2];
// let k1 = removeDuplicates(nums1);
// console.log("Output:", k1, "nums =", nums1.slice(0, k1)); // Output: 2 [1, 2]

// let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k2 = removeDuplicates(nums2);
// console.log("Output:", k2, "nums =", nums2.slice(0, k2)); // Output: 5 [0, 1, 2, 3, 4]


const nums = [1,1,2];

console.log(removeDuplicates(nums))
