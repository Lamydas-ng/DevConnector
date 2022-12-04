
import { date } from "./dateTimeDemo.js";
import { add, evenOrOdd, hello, sub } from "./module1.js";

hello("abhi welcome2");
let a = 10, b = 5;
let result = 0;
let result2 = 0;

// sum two numbers
 result = add(a,b)
console.log(result)

// Substract two numbers
result2 = sub(a,b)
console.log(result2)

let resultEvenOrOdd = evenOrOdd("10");
console.log(resultEvenOrOdd);

console.log(100 / 10 == "10");
// == will check the value irrespective of the type
console.log(100 / 10 === "10");
// === will check the value with respect to the type.
// npm init : it will generate the package.json file which is an entry point for our
// node js based project
// it will have all the details regarding your library which will be using in the project.

// npm : node package manager : env for node.
// init : it will help us to create the nodejs based project structure.
// json : javascript objct notation ==> will hold the details in terms of the keys and value pairs. key : value
// keys will present to the left side and values will present to the right side.

date();