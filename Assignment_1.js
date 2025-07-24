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
  
 
//   const year = 2020;r} is a Leap Year`);
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
  

// 9.Check prime number 
// function isPrime(num)
// {
//     if(num<=1)return false;
//     if(num===2)return true;
//     if(num%2===0)return false;

//     const sqrt=Math.sqrt(num);
//     for(let i=3; i<=sqrt;i+=2){
//         if(num%i===0)return false;
//     }
//     return true;
// }
// const input=11;
// console.log(`${input}is${isPrime(input)?'prime':'not prime'}`);



// 10. Count Digits in a Number
// function countDigits(number) {
    
//     return number.toString().length;
//   }
  
 
//   const number = 5023;
//   console.log(countDigits(number));  


// 11. Sum of Digits
// function sumOfDigits(number) {
  
//     return number
//       .toString()
//       .split('')
//       .reduce((sum, digit) => sum + parseInt(digit), 0);
//   }
  
 
//   const number = 123;
//   console.log(sumOfDigits(number));  
  
  
// 12. Check Armstrong Number
// function isArmstrong(number) {
//     const digits = number.toString().split('');
//     const numDigits = digits.length;
  
//     const sum = digits.reduce((total, digit) => total + Math.pow(parseInt(digit), numDigits), 0);
  
    
//     return sum === number;
//   }
  
//   const number = 153;
//   if (isArmstrong(number)) {
//     console.log('Armstrong');
//   } else {
//     console.log('Not Armstrong');
//   }
  



// 13.Generate Fibonacci Series

// function generateFibonacci(n) {
//     const fibSeries = [0, 1]; 
    
//     for (let i = 2; i < n; i++) {
//       fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
//     }
//     return fibSeries.slice(0, n); 
//   }
  
//   const n = 5;
//   console.log(generateFibonacci(n).join(' ')); 
  

// 14. Check Vowel or Consonant
// function checkVowelOrConsonant(char) {

//     const vowels = 'aeiou';
//     if (vowels.includes(char.toLowerCase())) {
//       return 'Vowel';
//     } else {
//       return 'Consonant';
//     }
//   }
  
//   const char = 'a';
//   console.log(checkVowelOrConsonant(char));  

  
// 15. Simple Calculator
// function calculator(num1, num2, operator) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return 'Error: Division by zero';
//         }
//       default:
//         return 'Invalid operator';
//     }
//   }
  
  
//   const num1 = 4;
//   const num2 = 2;
//   const operator = '+';
  
//   console.log(calculator(num1, num2, operator)); 
  



// 16. Find GCD (HCF)
// function gcd(a, b) {
  
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
  
  
//   const num1 = 20;
//   const num2 = 28;
  
//   const result = gcd(num1, num2);
  
 

// 17. Check Perfect Number


// function isPerfectNumber(num) {
//     let sum = 0;
  
   
//     for (let i = 1; i <= num / 2; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
  
//     return sum === num;
//   }
  
//   const number = 28;
  
//   if (isPerfectNumber(number)) {
//     console.log(`${number} is a Perfect Number`);
//   } else {
//     console.log(`${number} is not a Perfect Number`);
//   }
  



// 18. Print All Divisors
// function printDivisors(num) {
//     let divisors = [];
  

//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         divisors.push(i);
//       }
//     }
  
//     console.log(divisors.join(' '));
//   }
  
 
//   const number = 10;
  
//   printDivisors(number);
  
// 19. Number is Positive, Negative or Zero

// function checkNumberSign(num) {
//     if (num > 0) {
//       console.log("Positive");
//     } else if (num < 0) {
//       console.log("Negative");
//     } else {
//       console.log("Zero");
//     }
//   }
  
//   const number = -5;
  
//   checkNumberSign(number);
  





// 20. Find Power (Exponentiation)


function findPower(base, exponent) {
    return Math.pow(base, exponent);
  }
  const base = 2;
  const exponent = 3;
  
  const result = findPower(base, exponent);
  console.log(result);  
  


















  
