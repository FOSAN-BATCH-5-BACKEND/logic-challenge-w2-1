/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat sebuah program untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

function prima(num) {
    for (let i = 2; i < num; i++){
    if (num % i === 0) {
        return false;
    }
}
return num > 1;

}

console.log(prima(1)) //false
console.log(prima(2)) //true
console.log(prima(5)) //true
console.log(prima(45)) //false
console.log(prima(23)) //true
console.log(prima(230)) //false