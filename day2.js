// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.


const reverseWord = (s)=>{
    const wordsArray = s.split(" ")
    const anotherCheck = s.replace(/\s+/g, '').split('')
    console.log(anotherCheck.length)
    if(anotherCheck.length === 0){
        return 'THIS STRING HAS NO CONTENT TO REVERSE'
    }
       for(let i = 0; i < wordsArray.length; i++){
        console.log(wordsArray[i].split('').reverse().join(''))
        wordsArray[i] = wordsArray[i].split('').reverse().join('');
       }



   return wordsArray.join(' ')
}

// console.log(reverseWord(" ")) 

const nameMe = 'solo githira'

// console.log(nameMe.split(" ").reverse().join(" "))



// create a palidrome

const palidrome = (name)=>{
//  console.log(name.split("").reverse().join("")) 
 return name === name.split("").reverse().join("") ? 'THIS IS A PALIDROME' : 'THIS IS NOT A PALIDROME'  
}

console.log(palidrome('solo'))

