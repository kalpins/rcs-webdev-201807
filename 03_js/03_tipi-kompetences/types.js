// primitīvi

var a =5;
console.log(a);//5
var b = a;
console.log(b);//5

a = 12;
console.log(a)//12;
console.log(b)//5;


// norādes tipa

var array = [1,2,3];
console.log(typeof array);// object
//objekti ir norādes tipa
console.log(array); // 1, 2, 3

var arrayB = array;
console.log(arrayB); // 1, 2, 3

array.push(4); //funkcija ir apskatīta 11 modulī

console.log(array); // 1, 2, 3, 4
console.log(arrayB); // 1, 2, 3, 4

array = ["a" , "b"];
console.log(array); // "a", "b"
console.log(arrayB);// 1, 2, 3, 4
//šajā gadījumā tiek izveidota jauna vērtība atmiņā ar citu norādi;