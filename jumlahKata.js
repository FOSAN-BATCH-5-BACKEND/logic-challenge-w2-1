/*
Problem
Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan sebuah kalimat.
Function akan mengembalikan jumlah kata dari kalimat tersebut.
Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.
*/

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // let hitung = kalimat.split(' ').length;

  // return hitung;

  if (kalimat == " " || !kalimat) {
    return "maaf masukkan kalimat";
  } else {
    let spasi = 0;
    for (let index = 0; index < kalimat.length; index++) {
      // console.log(kalimat[index]);
      if (kalimat[index] == " ") {
        spasi += 1;
      }
    }
    spasi += 1;
    // console.log(spasi);
    return spasi;
  }
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
console.log(hitungJumlahKata("")); // 1
