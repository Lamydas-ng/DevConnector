
// you have to declare 2 arrays : 1st array hold the numbers and 2nd array hold the factorials .
// [1,2,3,4,5] 2nd expected : [1,2,6,24,120]

var number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var number_fatorial = [];
for (let i = 0; i <= number_arr.length - 1; i++) {
    var number = number_arr[i];
    var digit = 0;
    var factorial = 1;
    var sum = 0;
    var temp = number;
    while (number > 0) {
        // taking mod to get the last digit
        digit = number % 10;
        //calculating the factorial fo the digit
        if (digit == 0 || digit == 1) {
            factorial = 1;

        } else {

            for (var n = 1; n <= digit; n++) {
                factorial = factorial * n;
            }
        }
        // printing the factorial
        // console.log(factorial);
        // adding the factorial value to the sum later to check the number is strong or not.
        sum += factorial; // sum = sum + factorial
        // reseting the factorial to 1 to get a support to calculate the factorial of the next digit.

        factorial = 1;
        // dividing the number by 10 to remove the last digit and applying floor function to remove the fraction from it.

        number = Math.floor(number / 10);
    }
    number_fatorial[i] = sum;
}
console.log("The Number Array: " + number_arr);
console.log("The factorial Array: " + number_fatorial);