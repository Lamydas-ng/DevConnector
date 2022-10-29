
// strong number :
// 145 : 1! + 4! + 5!
//     : 1 + 24 + 120
// 145
// if sum of the factorail = original number then that number is called as strong number.

var number = 111;

var str = number.toString();
var result = 0;
for (let n = 0; n < str.length; n++) {
  result = result + factorial(Number(str.charAt(n)));
}

if(parseInt(result,10) === number)
    console.log(`Factorial of ${number} is a strong number: ${result}`);
else
    console.log(`factorial of ${number} is not a strong number: ${result}`);

function factorial(num) {
    var result = 1;

    if (num == 0 || num == 1) {
         return result;
    }

    for (var i = num ; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
