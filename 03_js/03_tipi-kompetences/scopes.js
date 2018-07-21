var test = "global";
console.log(test);//logs "global";

function inheritScope(){
    console.log(test);
}

inheritScope(); //logs "global";

function localScope(){
    var test = "local";
    console.log(test);
}

localScope(); //logs "local"
console.log(test) //logs "global"



// UZDEVUMS 1.
// aizkomentēt 1. - 9. rindu un pārbaudīt, kas notiek;
// 
// UZDEVUMS 2.
// nodzēst 11. rindā "var" un pārbaudīt, kas notiek;



// ATBILDE 1.
// Parādās ERROR, jo nav definēts mainīgais GLOBAL Scope;
//
// ATBILDE 2.
// Kļūda pazūd, jo tagad šis mainīgais tiek definēts, kad JS fails tiek lasīts