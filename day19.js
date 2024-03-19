// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false


function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const mapPatternToWord = new Map();
    const mapWordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!mapPatternToWord.has(char) && !mapWordToPattern.has(word)) {
            mapPatternToWord.set(char, word);
            mapWordToPattern.set(word, char);
        } else {
            if (mapPatternToWord.get(char) !== word || mapWordToPattern.get(word) !== char) {
                return false;
            }
        }
    }

    return true;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
