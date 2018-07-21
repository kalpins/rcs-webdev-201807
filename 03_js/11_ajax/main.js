// more info at
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// https://www.w3schools.com/js/js_ajax_intro.asp

var http = new XMLHttpRequest();
var url = "http://jsonplaceholder.typicode.com/posts";
var method = "GET";

http.open(method,url);
http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(JSON.parse(http.responseText)); //response is JS Object
        //and here you can do what you want with requested data. Edit DOM;
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log("ERROR");
    }
};

http.send(); //Sending request


//post

var httpPost = new XMLHttpRequest();
var url = "http://jsonplaceholder.typicode.com/posts";
var method = "POST";
var data = "title=Post%20Title&body=Body"

httpPost.open(method,url);
httpPost.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpPost.onreadystatechange = function(){
    if (httpPost.readyState === XMLHttpRequest.DONE && httpPost.status === 201){
        console.log("Resource was created");
        console.log(JSON.parse(httpPost.responseText)); //response is JS Object
        //and here you can do what you want with requested data. Edit DOM;
    } else if (httpPost.readyState === XMLHttpRequest.DONE && httpPost.status !== 201) {
        console.log("ERROR");
    }
};

httpPost.send(data); //Sending request