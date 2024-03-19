//this is the cyclic algorithim 

// A cyclic algorithm in JavaScript typically refers to an algorithm that operates 
// on a cyclical or circular data structure, such as an array or a linked list, where
//  the algorithm repeats its operations until certain conditions are met. These algorithms 
//  often involve iterating through the elements of the data structure in a circular manner.

// Here's a basic explanation of how you might implement a cyclic algorithm in JavaScript
//  using an array as an example:




function cyclicAlgorithm(array) {
    let currentIndex = 0;

    // Loop indefinitely until a certain condition is met
    while (true) {
        // Do something with the current element
        console.log(array[currentIndex]);

        // Move to the next element in a cyclic manner
        currentIndex = (currentIndex + 1) % array.length;

        // Check if we have completed one cycle (optional condition to break the loop)
        if (currentIndex === 0) {
            break; // Exit the loop after completing one full cycle
        }
    }

   
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
// console.log(cyclicAlgorithm(myArray)) ;

// console.log(1 % 6)






