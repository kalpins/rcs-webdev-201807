function generator(input){
    var number = input;
    return function(){ //anonīma funkcija bez nosuakuma
        return number *2 ;
    }
}

var calc = generator(900);
console.log(calc);
/* 
ƒ (){ //anonīma funkcija bez nosuakuma
        return number *2 ;
    }
*/

console.log(calc()); //1800

var otherCalc = generator(1000);
console.log(calc()); //1800;
console.log(otherCalc()); //2000;


// immediatly invoked function executions (IIFEs)
// This uses local scope

(function calc() {
    var number = 10;
    console.log('This function was called even we don\'t call in our code');
    console.log(number);//10
})();

// console.log(number);//error

// passing variables to this kind of function

(function calc2(input) {
    var number = input;
    console.log('This function was called even we don\'t call in our code');
    console.log(number);//10
})(10);

// passing object

var obj = {}; //it's defined here! (global scope)
(function calc3(input) { //and not defined here (local scope)
    obj.name="Rolands"
})(obj);
console.log(obj);//{name: "Rolands"}



///

function message(message){
    console.log(message);
    console.log(arguments);//defined in function //Arguments ["hi!", callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
message("hi!"); //console.log //hi!

//

function message2(message){
    console.log(message);
    console.log(arguments);//Arguments(2) ["hi!", "Bye", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments[1]); //bye
    console.log(arguments.length);//2
}
message2("hi!","Bye"); //console.log //hi!

console.log(message2.name)// message2 <- prints name of function

var msg = message2;
console.log(msg.name)// message2 <- prints name of function
console.log(msg.length) //1 - number of arguments this function expects


// 

var msg2 = function(mess){
    console.log(mess);
}
console.log(msg2.name) // "" - because function is anonymous but it is assigned to variable msg2
