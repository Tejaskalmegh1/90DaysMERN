let num1 = 15, num2 = 10, num3 = 5;

// IF Statement

if(num1>num2){
    console.log("First Number is Greater!");
}

// IF-ELSE Statement

if(num2<num3) {
    console.log("Third Number is Greater!");

} else {
    console.log("Second Number is Greater!");
    
}

// ELSE-IF Statement

if (num3 < 0) {
    console.log("Number is Negative");
    
} else if(num3 > 0) {
    console.log("Number is Positive");
    
} else {
    console.log("Number is Zero ");
    
}



// Writing method to take input from user (Console)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// OPTIONS TO DISPLY ON CONSOLE

console.log("Press 1 to perform ADDITION");
console.log("Press 2 to perform SUBTRACTION");
console.log("press 3 to perform MULTIPLICATION");


rl.question("Enter First Number: ",function(n1){
    rl.question("Enter Second Number: ",function(n2){
        rl.question("Enter your choice: ",function(ch){
        rl.close();

        // STRING TO NUMBER
        
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        ch = parseFloat(ch);

        // SWITCH STATEMENT

        switch(ch){
            
            case 1 :
            console.log("ADDITION: ",n1+n2);
            break;
            
            case 2 :
            console.log("SUBTRATION: ",n1-n2);
            break;
                
            case 3 :
            console.log("MULTIPLICATION: ",n1*n2);
            break;
                    
            default :
            console.log("Please Enter Valid Choice!");
            break;

         }    
        });
    
    });

});


// FOR STATEMENT 

console.log("for loop example");

for(let i = 1; i <= 5; i++){
    console.log(" ",i);
}


// WHILE LOOP

let j = 5;

console.log("while loop example");

while(j <= 10){
    console.log("",j);
    j++;    
}


// DO - WHILE LOOP

let k = 10;

console.log("do - while loop example");

do{
    console.log("",k);
    k++;
} while (k <= 15);