// 1. Given a number n, check whether it is even or odd. Return true for even and false for odd.

// Examples: 

// Input: 2 
// Output: true


// Input: 5
// Output: false

// const checkEvenAndOdd = (n) => {
//    if(n % 2 === 0) return true;
//    return false
// }

// console.log(checkEvenAndOdd(1000)) // false
// console.log(checkEvenAndOdd(19)) // true



// 2. Given a number n, we need to print its table. 

// Examples : 

// Input:  5
// Output: 
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// const numTable = (n) => {
//    let r = 0;
//     for ( let i = 1; i <= 10; i++){
//       r = n * i
//       console.log(`${n} * ${i} =  ${r}`)
//     }
//     return r
// }

// console.log(numTable(2))



// 3. Given a number n, find the sum of the first n natural numbers.

// Examples : 

// Input: n = 3
// Output: 6
// Explanation: Note that 1 + 2 + 3 = 6

// Input  : 5
// Output : 15 
// Explanation : Note that 1 + 2 + 3 + 4 + 5 = 15

// const sumNum = (n) => {
//    let output = 0;
//    for( let i = 0; i <= n; i++) {
//       output += i
//    }
//    return output
// }

// console.log(sumNum(3))


// 4. Given two numbers a and b, the task is to swap them.

// Examples:

// Input: a = 2, b = 3
// Output: a = 3, b = 2

// Input: a = 20, b = 0
// Output: a = 0, b = 20

// Input: a = 10, b = 10
// Output: a = 10, b = 10 


// const swap = (a,b) => {
//       //  const a1 = b;
//       //  const b1 = a

//       [a, b] = [b, a];

//        console.log(`a = ${a}, b = ${b}`)
       
//        return `a = ${a}, b = ${b}`
// }

// console.log(swap(20,0))


// 5. Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, 
// then output the one having maximum absolute value.

// Examples: 

// Input: n = 13, m = 4
// Output: 12
// Explanation: 12 is the closest to 13, divisible by 4.


// Input: n = -15, m = 6
// Output: -18
// Explanation: Both -12 and -18 are closest to -15, but-18 has the maximum absolute value.

// steps
// use if else to check when a number is less than n and divisible by m
// we create an empty array to store the values and check for the absolute highest value
// we can use Math.max to get the maximum value or MATH.abs on the array that we created

// Javascript implementation to find
// the number closest to n and
// divisible by m

function closestNumber(n, m) {

    // find the quotient
    let q = parseInt(n / m);
    
    // 1st possible closest number
    let n1 = m * q;
    
    // 2nd possible closest number
    let n2 = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));
    
    // if true, then n1 is the
    // required closest number
    if (Math.abs(n - n1) < Math.abs(n - n2))
        return n1;
    
    // else n2 is the required
    // closest number
    return n2;
}

// Driver Code
let n = 13;
let m = 4;
console.log(closestNumber(n, m));