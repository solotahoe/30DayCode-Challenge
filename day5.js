// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1

const countSegments = function(s){
      s = s.trim();
      const segments3 = s.split(/\s+/);
    //   console.log(s.split(' '))
    //   console.log(segments3.length)
    const segment = s.split(' ').length;

    return segments3.length;  
}
console.log(countSegments('Hello  my       name       is        solo                              '))  