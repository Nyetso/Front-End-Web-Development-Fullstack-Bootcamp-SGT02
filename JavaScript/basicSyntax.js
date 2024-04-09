// variables
// let //mutable or changeable variable
let  myName = "Harris";
console.log(myName);
myName ="Harris2"; //changeable value
console.log(myName);

// var //same as 'let' but older way of programming
var age = 32;
console.log(age);
age = 31;
console.log(age);

// const //non changeable variable
const myAge = 32;
console.log(myAge);

// myAge = 30;
// console.log(myAge);

// key points
//comments - ctrl + /
//case sensitive
//console.log (debug mode)

//data types
//primitive types
//number - int, float

let number = 13;
console.log("Number: ", number);

//string - '' or ""
let hello="Hello World";
console.log("String: ", hello);

//Boolean - true or false
let isStudent = true;
console.log("Boolean: ", isStudent);

//undefined - uninitialized or missing value
let score;
console.log("Undefined : ", score);

//null - intentional absence
let nullVar = null;
console.log("Null : ", nullVar);

//reference types
//object - key value pairs enclosed in curly braces {}
let personObject = {
    name: "Harris",
    age: 32,
    hobbies: "Programming"
};
console.log("object all: ", personObject);
console.log("Object's Name: ", personObject.name);
console.log("Object's Age: ", personObject.age);
console.log("Object's Hobbies: ", personObject.hobbies);

//Array - ordered list of values in square brackets []
let fruits = ["Apples", "Oranges", "Lemon"];
console.log("fruit all: ",fruits);
console.log("fruit last: ",fruits[fruits.length - 1]);

//access array elements
//arrays will start at index 0 and not 1
for(let i=0;i<fruits.length;i++)
{
    console.log("Fruits no ",i,"is: ",fruits[i]);
}

//modifying elements
fruits.push("Watermelon");
console.log("fruit modified: ",fruits[fruits.length - 1]);

fruits.pop();
console.log("fruit remove last element: ",fruits[fruits.length - 1]);

//function - reusable blocks of code
function sayHello() {
    console.log("Hello World");
}
sayHello();

//date
let date = new Date("2022-04-13"); //specify dates
console.log(date);

let date2 = new Date(); //current dates
console.log(date2);
let date3 = Date(); //current dates
console.log(date3);

