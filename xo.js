/*
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o,
dan false jika tidak.
*/

function xo(str) {
  var o= str.split('o').length -1
  var x=str.split('x').length -1
  if (x == o){
    return (true);
  }else(x >= o)
  {
    return(false);
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true