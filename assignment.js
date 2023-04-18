//Assignment -11 by Md. Al Zabed Sarkar

// Question : Write a program that generates a multiplication table for a given number using a for loop.


function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let product = num * i;
    console.log(num + " x " + i + " = " + product);
  }
}

// Test the function with different input numbers

multiplicationTable(5);

multiplicationTable(7);

// If we run this code then the answer will be like this :

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
