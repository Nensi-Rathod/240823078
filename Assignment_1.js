// 1. Check Even or Odd

// function checkEvenOdd(number){
//     if (number % 2 === 0){
//         console.log("Even");

//     }else{
//         console.log("odd");
//     }
// }
// const input=7;
// checkEvenOdd(input)

//2. Find the Maximum of Two Numbers

// const num1 = 5;
// const num2 = 9;

// console.log(Math.max(num1, num2));

// 3. Check Leap Year
// function isLeapYear(year) {
//     // Leap year logic
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
 
//   const year = 2020;
  
//   if (isLeapYear(year)) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is not a Leap Year`);
//   }
  
// 4. Sum of Natural Numbers
// function sumOfNaturalNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   const n = 5;
//   const result = sumOfNaturalNumbers(n);
  
//   console.log(`The sum of the first ${n} natural numbers is ${result}`);
  
// 5. Factorial of a Number
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   const number = 4;
//   const output = factorial(number);
  
//   console.log(`The factorial of ${number} is ${output}`);
// 6. Print Multiplication Table
// function printMultiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${n} x ${i} = ${n * i}`);
//     }
//   }
  
  
//   const number = 3;

//   console.log(`Multiplication Table of ${number}:`);
//   printMultiplicationTable(number);

// 7. Reverse a Number
// function reverseNumber(num) {
//     const reversed = num.toString().split('').reverse().join('');
//     return parseInt(reversed, 10); 
//   }
  
//   const input = 1234;
//   const output = reverseNumber(input);
//   console.log(`Reversed number of ${input} is ${output}`);
  
// 8. Palindrome Check (Number)
// function isPalindrome(num) {
//     const original = num.toString();
//     const reversed = original.split('').reverse().join('');
//     return original === reversed;
//   }
  
 
//   const number = 121;
  
//   if (isPalindrome(number)) {
//     console.log(`${number} is a Palindrome`);
//   } else {
//     console.log(`${number} is not a Palindrome`);
//   }
  