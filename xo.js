/*
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o,
dan false jika tidak.
*/

function xo(str) {
  // you can only write your code here!
  karakter1 = "x";
  karakter2 = "o";
  return str.split(karakter1).length - 1 == str.split(karakter2).length - 1
    ? true
    : false;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
