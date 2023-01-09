const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Determine if every number is greater than or equal to 0
const isGreaterThan0 = (arr) => {
    let result = 0;
    arr.forEach((element) => {
      if (element < 0) {
        result += 1;
      }
    });
    return result > 0 ? false : true;
  };
  
  console.log("isGreaterThan0", isGreaterThan0(nums));
  