/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat sebuah program untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

// if ( angka > 1 ) {
//     for ( let i = 2; i < angka; i++) {
//       if ( angka % i == 0) {
//         return false;
//       } 
//     }
//     return true;	
//   }
//   return false;
function prima(num) {
    var pembagi = '';
    for( let i = 1;  i <= num;  i++ ) {
        if( num % i == 0 )
            pembagi++;
    }
    if  (pembagi == 2){
        return true;
    }else {
        return false
    }
        
}  
console.log(prima(1)) //false
console.log(prima(2)) //true
console.log(prima(5)) //true
console.log(prima(45)) //false
console.log(prima(23)) //true
console.log(prima(230)) //false