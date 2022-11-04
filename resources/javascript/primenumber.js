// declare an array with 10 numbers and find out prime numbers in the array.
// prime number divides itself and 1

var prime_arr = [41, 43, 47, 53,125,785,558,721,14,121];
var prime_Num = 0;
for (let i = 0; i <= prime_arr.length - 1; i++) {
  let isPrime = true;
  let prime_Num = prime_arr[i];
     for (let i = 2; i < prime_Num; i++) {
        if (prime_Num % i == 0) {
            isPrime = false;
            break;
        }
    }
     if (isPrime)
        console.log(`${prime_Num} is a prime number`);
}