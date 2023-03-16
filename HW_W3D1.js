// 1. Function declaration to find the maximum of two numbers
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
    return num1;
    } else {
    return num2;
    }
    }
    console.log(maxOfTwoNumbers(3, 7)); // Expected output: 7
    
    // 2. Function expression to find the maximum of three numbers
    const maxOfThree = function(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
    return num1;
    } else if (num2 >= num1 && num2 >= num3) {
    return num2;
    } else {
    return num3;
    }
    };
    console.log(maxOfThree(2, 6, 4)); // Expected output: 6
    
    // 3. Function declaration to check if the character is a vowel
    function isCharAVowel(char) {
    return /[aeiou]/i.test(char);
    }
    console.log(isCharAVowel('o')); // Expected output: true
    
    // 4. Function expression to find the sum of an array of numbers
    const sumArray = function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    }
    return sum;
    };
    console.log(sumArray([2, 4, 5])); // Expected output: 11
    
    // 5. Function declaration to find the product of an array of numbers
    function multiplyArray(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
    }
    return product;
    }
    console.log(multiplyArray([2, 4, 5])); // Expected output: 40
    
    // 6. Function expression to find the number of arguments passed to the function
    const numArgs = function(...args) {
    return args.length;
    };
    console.log(numArgs(1, 2, 3, 4)); // Expected output: 4
    
    // 7. Function declaration to reverse a string
    function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    }
    return reversedStr;
    }
    console.log(reverseString('rockstar')); // Expected output: 'ratskcor'
    
    // 8. Function expression to find the length of the longest string in an array
    const longestStringInArray = function(strings) {
    let maxLength = 0;
    for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxLength) {
    maxLength = strings[i].length;
    }
    }
    return maxLength;
    };
    console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning'])); // Expected output: 7
    
    // 9. Function declaration to find strings longer than a given number in an array
    function stringsLongerThan(strings, num) {
    let longerStrings = [];
    for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > num) {
    longerStrings.push(strings[i]);
    }
    }
    return longerStrings;
    }
    console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Expected output: ['hello', 'morning']