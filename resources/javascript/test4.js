// do while loop: exit control
var i = 100;
console.log("before loop");
do{
    console.log(i);
    i++;
}while (i <= 10)
console.log("after loop");
// the above code is executed unnecessary at least once.
// printing numbers from 1 to 10.
// whenever we need to repeat the steps / process : in that case we should use the loops
// 1. while : entry control : we don't know the number of times loop should be executed
// we don't have the fixed criteria for condition.
// 2. for : entry control : steps/ increment : or if you know about end limit  preferred
// for arrays (should be traversal order from 0 to size-1)
// 3. do while. exit control : is not the preferred approach in good practices.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}
var result = 1;
for (var i = 1; i <= 10; i++) {
  if (i == 0 || i == 1)
  console.log(result)
  result = result * i;
}
console.log(result)


// find out the factorial of a number.

// 5! : 5* 4 * 3 * 2 * 1  or 1 * 2 * 3 * 4 * 5
//5! : 20 * 3 * 2 * 1
// 120
var result = 1;
for (var i = 5; i >= 1; i--) {
  if (i == 0 || i == 1) {
    console.log(result);
  }
  result = result * i;
}
console.log(result);

// strong number :
// 145 : 1! + 4! + 5!
//     : 1 + 24 + 120
// 145
// if sum of the factorail = original number then that number is called as strong number.
//p

var number = 145;
number = number.toString.map(num =>
  factorial(num)
).reduce((cum, cur) => cum + cur);

console.log(number);

function factorial(num) {
  var result = num;
    for (var i = num - 1; i >= 1; i--) {
        if (i == 0 || i == 1) {
          return result;
        }
     return result = result * num;
    }

}