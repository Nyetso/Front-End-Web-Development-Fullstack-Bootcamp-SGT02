let grade = 0;
let gradeValue;

do {
    grade = prompt ("Please input your grade value :");
} while (grade == "");

if ( grade >= 90 ) {
    gradeValue = "A";
    console.log("You have a Grade ",gradeValue);
} else if ( grade >= 80 && grade <= 89 ) {
    gradeValue = "B";
    console.log("You have a Grade ",gradeValue);
} else if ( grade >= 60 && grade <= 69 ) {
    gradeValue = "C";
    console.log("You have a Grade ",gradeValue);
} else {
    gradeValue = "F";
    console.log("You have a Grade ",gradeValue);
    console.log("Try Again!");
}