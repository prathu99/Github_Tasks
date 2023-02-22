// 3. Do the below programs in arrow functions

// a. Print odd numbers in an array

// let oddNumbers = (...array) => {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0) {
//             console.log(array[i])
//         }
//     }
// }

// oddNumbers(4, 6, 7, 8, 9, 1)

// b. Convert all the strings to title caps in a string array

// let titleCaps = (str) => {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }

// c. Sum of all numbers in an array

// let sumNumbers = (...arr) => {
//     let result = 0
//     for (var i of arr) {
//         result += i
//     }
//     return result
// }

// console.log(sumNumbers(4, 3, 2))

// d. Return all the prime numbers in an array

// let primeNumber = (numArray) => {
//     numArray = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//     });
//     console.log(numArray);
// }


// e. Return all the palindromes in an array

// let Palindrome = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//         let ans = isPalindrome(arr[i]);
//         if (ans == false)
//             return false;
//     }
//     return true;
// }
