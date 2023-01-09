function validAnagram(string1, string2) {

    if(string1.length !== string2.length){
        return false;
    }

    const charFrequency1 = {};
    const charFrequency2 = {};

    for(const char of string1){
        charFrequency1[char] = charFrequency1[char] + 1 || 1
    }

    for(const char of string2){
        charFrequency2[char] = charFrequency2[char] + 1 || 1
    }
    
        for(const key in charFrequency1){
            if(!(key in charFrequency2) || charFrequency2[key] != charFrequency1[key]){
                return false;
            }
        }
return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
