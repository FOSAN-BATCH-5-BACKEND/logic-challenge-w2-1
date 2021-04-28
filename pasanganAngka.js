/*Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
Contoh, jika angka adalah 183928, maka function akan me-return 92,
pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function pasanganTerbesar(num) {
  // you can only write your code here!
  let string = num.toString();
  let hasil = "";
  let sementara = 0;
  for (let i = 0; i < string.length-1; i++) {
    // console.log(string[i], string[i+1]);

    hasil = string[i] + string[i + 1]
    if(hasil > sementara) {
      sementara = hasil
    }
  }
  return sementara;
  // console.log(hasil);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99