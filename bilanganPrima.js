/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat sebuah program untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

function prima(num) {
    // num > 1
    // num / 1 = 1
    if(num == 1 || num / num == 1){
       return false;     
    }else if(num == 2 || num / num == 2){
        return true;
    }else if(num >= 2){
        for(let i = num -1; i >= 2; i++){
            return true;
        }
    }else{
        console.log('error');
    }
    

}
console.log(prima(1)); //false
console.log(prima(2)); //true
console.log(prima(45)); //false
console.log(prima(23)); //true
console.log(prima(230));//false