
// declare an array with 10 numbers and find out strong numbers in the array.


var number_arr = [145, 43, 47, 53, 125, 785, 558, 721, 14, 121];

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
        for (var n = 1; n <= digit; n++) {
            factorial = factorial * n;
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
    if (temp === sum)
        console.log(`${temp} is a strong number`);

}