//function FindDuplicate() array method//
//returns an array of duplicates by using filter()method//
// indexOf() method is used to determine the first occurrence of each item in the array//
// filter() method keeps only items whose index is not equal to the first occurrence// 
function findDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};
const previousArr = [1, 2, 3, 1, 4, 2];
const newArr = [...new Set(previousArr)];
console.log(newArr); // [1, 2, 3, 4]

//arr.reverse()//
//This method is used to reverse the order of elements in the array//
const arr1 = ['apple', 'orange', 'book', 'date'];

//console.log('Original array:', arr1);

arr1.reverse();

console.log('Reversed array:', arr1);

// how to reverse an array using spread operator//
//the spread operator is('...') creates a new array that is a copy of the original array//

const arr = ['apple', 'orange', 'book', 'date'];

console.log('Original array:', arr);

const reversedArr = [...arr].reverse();


console.log('Reversedarr');

//find the least and the highest value in an array//
const arr2 = [1, 10, 5, 8, 3];

const highestValue = Math.max(...arr2); // using spread operator
const leastValue = Math.min.apply(null, arr2); // using apply method

console.log('Array:', arr2);
console.log('Highest value:', highestValue);
console.log('Least value:', leastValue);

//moving all negative elements in one side//
//function returns a new array where all negative elements are at the beginning//
 //followed by the non-negative elements//
function moveNegatives(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        result.unshift(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage
  const arr3 = [1, -2, 3, -4, 5, -6];
  const result = moveNegatives(arr3);
  console.log(result); // Output: [-2, -4, -6, 1, 3, 5]

//identifying a string as a paalindrome//
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example usage
  console.log(isPalindrome('racecar')); // Output: true
  console.log(isPalindrome('hello')); // Output: false
  
  


//identifying a number as a palindrome//
//function called isPalindrome that takes a number num as an argument//

function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example usage
  console.log(isPalindrome(12321)); // Output: true
  console.log(isPalindrome(12345)); // Output: false
  