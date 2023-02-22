//Do the below programs in anonymous functions and IIFE

// a. Print odd numbers in an array

// console.log("Anonymous Function");
// var func_odd = function (...arr) {
//     for (var i of arr) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// }

// console.log(func_odd(3, 5, 22, 13, 45))

// console.log("IIFE");
// (function (...arr) {
//     for (var i of arr) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// })(3, 5, 7, 12, 22, 99)


//b. Convert all the strings into title caps in a string array

// console.log("Anonymous Function");
// var func_caps = function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }



// console.log("IIFE");
// (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     console.log(str.join(' '));
// })("THIS IS A TEST");

//c. Sum of all numbers in an array

// console.log("Anonymous Function");
// let func_sum = function (...arr) {
//     let result = 0
//     for (var i of arr) {
//         result += i
//     }
//     return result
// }

// console.log(func_sum(4, 3, 3))

// console.log("IIFE");
// (function (...arr) {
//     let result = 0
//     for (var i of arr) {
//         result += i
//     }
//     console.log(result)
// })(3, 3, 2)

//d. Return all the prime numbers in an array

// var arr = [3, 5, 77, 45, 89, 7, 6]

// console.log("Anonymous Function");
// var func_prime = function (numArray) {
//     numArray = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//     });
//     console.log(numArray);
// }

// console.log("IIFE");
// (function (numArray) {
//     numArray = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//     });
//     console.log(numArray);
// })([4, 9, 22, 44])


// e. Return all the palindromes in array

// function isPalindrome(N) {
//     let str = "" + N;
//     let len = str.length;
//     for (let i = 0; i < parseInt(len / 2, 10); i++) {
//         if (str[i] != str[len - 1 - i])
//             return false;
//     }
//     return true;
// }

// console.log("Anonymous function")
// var func_pal = function (arr, n) {
//     // Traversing each element of the array
//     // and check if it is palindrome or not
//     for (let i = 0; i < n; i++) {
//         let ans = isPalindrome(arr[i]);
//         if (ans == false)
//             return false;
//     }
//     return true;
// }

// console.log("IIFE")
// (function (arr, n) {
//     for (let i = 0; i < n; i++) {
//         let ans = isPalindrome(arr[i]);
//         if (ans == false)
//             return false;
//     }
//     return true;
// })([1, 2, 3], 3)

// f. Return median of two sorted arrays of the same size

// console.log("Arrays-Median")
// var arr1 = [44, 5, 23, 12, 9]
// var arr2 = [14, 13, 5, 76, 1]

// var median = (arr, n) => {
//     if (n % 2 !== 0) {
//         return arr[Math.floor(n / 2)]
//     }
//     else {
//         return Math.floor((arr[(n / 2) - 1] + arr[(n / 2)]) / 2)
//     }

// }

// console.log("Anonymous Function");
// var medianOfArrays = function (arr1, arr2, s) {

//     if (s < 1) {
//         return -1
//     }
//     if (s === 1) {
//         return (arr1[0] + arr2[0]) / 2
//     }
//     if (s === 2) {
//         return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2
//     }

//     var m1 = median(arr1, s)
//     var m2 = median(arr2, s)

//     if (m1 === m2) {
//         return m1
//     }
//     if (m1 > m2) {
//         if (s % 2 === 0) { return medianOfArrays(arr1, arr2.slice((s / 2)), s / 2) }
//         else { return medianOfArrays(arr1, arr2.slice(Math.floor(s / 2)), Math.ceil(s / 2)) }
//     }
//     else {
//         if (s % 2 === 0) { return medianOfArrays(arr1.slice((s / 2)), arr2, s / 2) }
//         else { return medianOfArrays(arr1.slice(Math.floor(s / 2)), arr2, Math.ceil(s / 2)) }
//     }
// }

// console.log(medianOfArrays(arr1, arr2, arr1.length))

// console.log("IIFE");
// console.log((function (arr1, arr2, s) {

//     if (s < 1) {
//         return -1
//     }
//     if (s === 1) {
//         return (arr1[0] + arr2[0]) / 2
//     }
//     if (s === 2) {
//         return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2
//     }

//     var m1 = median(arr1, s)
//     var m2 = median(arr2, s)

//     if (m1 === m2) {
//         return m1
//     }
//     if (m1 > m2) {
//         if (s % 2 === 0) { return medianOfArrays(arr1, arr2.slice((s / 2)), s / 2) }
//         else { return medianOfArrays(arr1, arr2.slice(Math.floor(s / 2)), Math.ceil(s / 2)) }
//     }
//     else {
//         if (s % 2 === 0) { return medianOfArrays(arr1.slice((s / 2)), arr2, s / 2) }
//         else { return medianOfArrays(arr1.slice(Math.floor(s / 2)), arr2, Math.ceil(s / 2)) }
//     }

// })(arr1, arr2, arr1.length));

// g. Remove duplicated from an array

// var arr = [67, 42, 3, 2, 6, 2, 4]

// console.log("Anonymous Function");
// var func_dup = function (arr) {
//     return arr.filter((x, p) => { return arr.indexOf(x) === p })
// }

// console.log(func_dup(arr))

// console.log("IIFE");
// (function (arr) {
//     console.log(arr.filter((x, p) => { return arr.indexOf(x) === p }))
// })(arr)

// h. Rotate an array by k times

// var arr = [3, 5, 77, 8, 4, 1, 2, 6]

// console.log("Anonymous Function");
// var func_rotate = function (arr, k) {
//     var n = arr.length
//     var op = []
//     k %= n
//     arr.forEach((x, i) => {
//         if (i < k) {
//             op.push(arr[n + i - k])
//         }
//         else {
//             op.push(arr[i - k])
//         }
//     })
//     return op
// }

// console.log(func_rotate(arr, 2))

// console.log("IIFE");
// (function (arr, k) {
//     var n = arr.length
//     var op = []
//     k %= n
//     arr.forEach((x, i) => {
//         if (i < k) {
//             op.push(arr[n + i - k])
//         }
//         else {
//             op.push(arr[i - k])
//         }
//     })
//     console.log(op)
// })(arr, 2)