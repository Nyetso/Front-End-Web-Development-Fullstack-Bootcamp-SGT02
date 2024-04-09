//35 operators - symbols or keywords
//Arithmetic operators - +, -, *, /
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

//modulo operator (%) - gives the remainder
console.log(100 % 7);

//exponent (**) - power of
console.log(5 ** 5);
console.log(5 ** 2);

//Assignment operators - '=' - assign a value to a variable, others: +=, -=, *=, /=
let num = 26;
console.log(num);

num += 1; //shortcut for (num = num + 1)
console.log(num);

num -= 5; //shortcut for (num = num - 5)
console.log(num);

num *= 3; //shortcut for (num = num * 3)
console.log(num);

num /= 2; //shortcut for (num = num / 2)
console.log(num);

//Comparison operators - return true or false = <, >, <=, >=, ==
console.log(50 > 20);
console.log(50 < 20);
console.log(50 >= 20);
console.log(50 <= 20);
console.log(50 == 50);
console.log(50 == "50"); //loose equality - it will perform type coercion (either change 50 to string or change "50" to int)
console.log(50 === "50"); //strict equality (int and string)

//Logical operators = AND (&&)
console.log(true && false);
console.log(50 > 23 && 50 <= 23);

//Logical operators = OR (||)
console.log(true || false);
console.log(50 > 23 || 50 <= 23);

//Logical operators = NOT (!)
console.log(false);
console.log(!false);

//Unary operators = ++, --
console.log(num);
num++;
console.log(num);
num--;
console.log(num);

//Ternary operators = condition ? result : else
let activeStatus = false;
let member = activeStatus ? "Registered" : "Not Registered";
console.log(member);

//typeof operators
console.log(typeof activeStatus);
console.log(typeof member);
console.log(typeof num);

//JS Expressions
let result = 2 + 3 * 4;  //PEMDAS rule
console.log(result);

//String concatenation (+)
let string = "Hello" + " " + "World!" + " " + result;
console.log(string);

//Logical
let x = 10;
let y = 4;
let logic = x > 5 && y < 10;
console.log(logic);

//Assignment
num = 27;
num += 10;
console.log(num);

// function - call functions and pass arguments
function greeting(name) {
    console.log("Hey there " + name + "!");
}
greeting("Harris"); //passing of an argument to a function
