
// strong number :
// 145 : 1! + 4! + 5!
//     : 1 + 24 + 120
// 145
// if sum of the factorail = original number then that number is called as strong number.

// var number = 145;

// var str = number.toString();
// var result = 0;
// for (let n = 0; n < str.length; n++) {
//   result = result + factorial(Number(str.charAt(n)));
// }

// if(parseInt(result,10) === number)
//     console.log(`Factorial of ${number} is a strong number: ${result}`);
// else
//     console.log(`factorial of ${number} is not a strong number: ${result}`);

// function factorial(num) {
//     var result = 1;

//     if (num == 0 || num == 1) {
//          return result;
//     }

//     for (var i = num ; i >= 1; i--) {
//         result = result * i;
//     }
//     return result;
// }

// Method 2 on strong number factorial
var number = 145;

var digit = 0;
var factorial = 1;
var sum = 0;
while (number > 0) {
    // taking mod to get the last digit
  digit = number % 10;
  //calculating the factorial fo the digit
  for (var i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  // printing the factorial
  console.log(factorial);
  // adding the factorial value to the sum later to check the number is strong or not.
  sum += factorial; // sum = sum + factorial
  // reseting the factorial to 1 to get a support to calculate the factorial of the next digit.

  factorial = 1;
  // dividing the number by 10 to remove the last digit and applying floor function to remove the fraction from it.

  number = Math.floor(number / 10);
}
