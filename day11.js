// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// const init = 4;

// console.log(init.toString(2))



function addBinary(a, b) {
    // Function to check if a string is a valid binary string
    function isValidBinary(str) {
        return /^[01]+$/.test(str); // Regular expression to match only 0s and 1s
    }

    // Check if the input strings are valid binary strings
    if (!isValidBinary(a) || !isValidBinary(b)) {
        throw new Error("Invalid binary input");  
    }
   
    // Convert binary strings to decimal numbers and add them together
    const num1 = parseInt(a, 2);
    const num2 = parseInt(b, 2);
    // Convert the sum back to a binary string and return it
    return (num1 + num2).toString(2);
}

// Test cases
try {
    console.log(addBinary("11", "1")); // Output: "100"
    console.log(addBinary("1010", "1011")); // Output: "10101"
    // Invalid input
    console.log(addBinary("2", "1011")); // Throws an error    
} catch (error) {
    console.error(error.message);      
}

//  console.log(addBinary(11,1))


// function isValidBinary(str) {
//     return /^[01]+$/.test(str); // Regular expression to match only 0s and 1s
// }

//  console.log(isValidBinary("1111111"))