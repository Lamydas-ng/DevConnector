// palindrome number : original number and reversal number should be same.
// 1. we have to form the reversal number.
// do we need to separate the digits and form the number.
// can we take a mod ?
// digit to form the number.

// then compare the original number with reversal number.


// declare an array with 10 numbers and find out palindrome numbers in the array.

var number_arr = [323,456,789,101112,125,785,558,721,14,121];


for(i=number_arr.length; i>=0; i--){

   // digit to hold the number.
    var digit = 0;
    var counter = 0;
    var reversal = 0;
    var number = 0;
    number = number_arr[i];

    while (number > 0) {
    // do we need to separate the digits and form the number
    
    digit = number % 10;

    reversal = reversal * 10 + digit;
    console.log(digit);
    number = Math.floor(number / 10);

        counter++;
    }

    console.log("final number:" + reversal);
    console.log("no of digits in a number=" + counter);
 }

