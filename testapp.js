var msg = "Hello World";
var msg2 = "Hello";
//console.log(msg.length);
//console.log(msg+msg2);
var a, b, c;     // Declare 3 variables
a = 53;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b; 
     // Assign the sum of a and b to c
//console.log(a!=b);
function myname()
{
    console.log(msg);
}

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

//myname();
var car = {type:"Fiat", model:"500", color:"white"};
//console.log(car.model);
var a=(4*5)/4;
//console.log(a);
//console.log(typeof 500 + "white");

var x = "100";
var y = "0";
var z = x/ y; 
//console.log(z);

var cars=new Array('4','5','6');
var len=1;
do{
cars[0]=Date.now.toString();
len++;
//console.log(cars[0]);
}
while(cars.length<2);


var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Hathway")

//console.log(fruits.reverse());
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}
var points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){
//    return a - b
//});
points.sort();
console.log(points);