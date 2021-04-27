/*
Problem
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome,
dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  balikKata = kata.split("").reverse().join(""); //buat variabel balik kata dari katanya
  if (kata === balikKata){ //baru dibandingkan aja
    return `true => ${kata} = ${balikKata}`;
  } else {
    return `false => ${kata} != ${balikKata}`;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false