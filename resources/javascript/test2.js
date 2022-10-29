// leap year.
// 2020 2000 1700 2022
// leap year :
// in between century : it should be divisible by 4
// 01 to 99 : it should be divisible by 4
// century : it should be divisible by 400

var year = 1600;

// apply check list of leap year on the provided year o not
// decision on year : whether it is a leap year or not.

console.log(year % 100);
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("year is leap year");
} else {
  console.log("year is not a leap year");
}

// %4 : it will give you remainder : in between the century
// %400 : to century only
// || : or operator : T F : T
// F T : T
// T T : T
// F F : F
// AND :
// T T : T
// F F : F
// T F : F
// F T : F
