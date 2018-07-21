"use strict"

//definējam masīvu
var array = [1,2,3]; 

//izvadām masīvu
console.log(array); // 1,2,3

// izvadām masīva garumu
console.log(array.length); //3

// izvadām masīva otro elementu
console.log(array[1]); //2

// masīva otram elementam piešķiram vērtību 100
array[1] = 100;

//izvadām masīvu
console.log(array); //1,100,3

// masīva ceturtajam elementam piešķiram vērtību 40
array[3] = 40;

//izvadām masīvu
console.log(array); //1,100,3,40

// masīva 6. elementam piešķiram vērtību 60
array[5] = 60

//izvadām masīvu
console.log(array); //1,100,3,40,undefined,60


//foreach funckija iet cauri (kā cikls) visam masīvam
array.forEach(function(element) { 
    /*forEach nepieciešams ievadīt funkciju un tā kā šo funkciju vairs neizmantosim, 
    tad to var definēt bez nosaukuma*/
    console.log(element); //1  //100 //3 //40 //undefined //60
});

//pievieno 4 array beigās
array.push(4);

//izvadām masīvu
console.log(array); //1,100,3,40,undefined,60,4
//tas pats ja mēs zinām array garumu un pievienotu ar array[array.length]=4

// izdzēš pēdējo elementu no array
array.pop();
//izvadām masīvu
console.log(array); //1,100,3,40,undefined,60

// izdzēš pirmo elementu no array
array.shift();
//izvadām masīvu
console.log(array); //100,3,40,undefined,60

// pievieno array sākumā elementu
array.unshift("new");
//izvadām masīvu
console.log(array); //"new",100,3,40,undefined,60

//atrast elementa indeksu pēc vērtības
console.log(array.indexOf("new")); //0
array.push(3);
console.log(array.indexOf(3)); //2

var newArray = array.splice(4); //pass index
console.log(newArray);//undefined,60,3
console.log(array);//"new", 100, 3, 40

newArray = array.splice(1,2); //index and how many elements
console.log(newArray);//100,3
console.log(array);//"new", 40

array.push(newArray);
console.log(array);// "new", 40, array(100,3) //multidimensiju masīvs

array = [1,2,3,4];
newArray = array.slice(2,3);//from which index to which index
console.log(array); // 1,2,3,4
console.log(newArray); //3
newArray = array.slice(2,4);
console.log(newArray); //3,4

//filter by some logic
console.log(array.filter(function(value){
    //let's filter if value is grater then 2
    return value > 2
})); //3,4

console.log(array.map(function(value){
    return value * 2;
}));//2,4,6,8

console.log(array.reverse());//4,3,2,1
console.log(array);//4,3,2,1

newArray = [1,2,3,4];
console.log(array.concat(newArray));//4,3,2,1,1,2,3,4
console.log(array);//4,3,2,1
console.log(newArray);//1,2,3,4

console.log(array.join(newArray));//41,2,3,431,2,3,421,2,3,41
console.log(array);//4,3,2,1,
console.log(newArray);//1,2,3,4

newArray = ["|"];
console.log(array.join(newArray));//4|3|2|1
console.log(array);//4,3,2,1,
console.log(newArray);//"|"

console.log(array.join(", "));//4, 3, 2, 1


console.log(array.reduce(function(total,value){
    console.log("total: " + total + ", value: "+ value);//total: 4, value: 3; total: 7, value: 2; total: 9, value: 1
    return total + value;
}));//10