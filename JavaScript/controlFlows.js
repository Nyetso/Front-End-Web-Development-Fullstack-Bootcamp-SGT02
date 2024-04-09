// conditional statements
// if statement
let number = 25;
if (number > 23) {
    console.log("you're greater than 23");
}

// if / else-if / else
if (number > 25) {
    console.log("you're greater than 25");
}
else if (number < 25) {
    console.log("you're greater than 25");
}
else {
    console.log("you're equal to 25");
}

// switch statement
let day = "Aidilfitri Day"

switch (day) {
    case 'Monday':
        console.log("It's the start of the week!");
        break;
    case "Friday":
        console.log("It's the end of the week!")
        break;
    case 'Aidilfitri Day':
        console.log("Raya! Raya! Raya!")
        break;
    default:
        console.log("It's a Regular Day!");
        break;
}

// Loops
// for loop
for(let i = 0; i < 5; i++) {
    console.log("for count: ", i);
}

// while loop
let count = 0;

while (count < 5) {
    console.log("while Count: ", count);
    count++;
}

// do-while loop
count = 0;

do {
    console.log("Do-While Count: ", count);
    count++;
} while (count < 5);

let input = "";

do {
    input = prompt("Pleaes input your name: ");
} while (input == "");

console.log("Your name: ",input);


