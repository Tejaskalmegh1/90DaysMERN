let num, num1 = 10

if(num1 % 2 == 0){
    console.log("Number is Even");
}else{
    console.log("Number is odd!");
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Any Number: ", function(num) {
  rl.close();
});

if(num > 0) {
    console.log("Number is Possitive")
} else if(num < 0) {
    console.log("Number is Negative")
} else {
    console.log("Number is Zero!")
}

rl.question("Enter your Number: ", function(number) {
  rl.close();
});

let dayName

switch(number){
    case 1 :
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number!";       
}

console.log("Your Day is ",dayName);
