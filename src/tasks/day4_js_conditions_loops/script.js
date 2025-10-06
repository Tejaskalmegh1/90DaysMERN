const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Any Number to check Even or Odd: ",function(num) {
    
    num = parseFloat(num);

    if (num % 2 == 0) {
        console.log(num," is Even");

    } else {
        console.log(num," is Odd!");
        
    }

rl.question("Enter the N'th Number ",function(num1) {

    num1 = parseFloat(num1);

    for(let i = 1; i <= num1; i++) {
        console.log("",i);
    }
   
rl.question("Enter Number from 1 to 7: ",function(ch) {
   
    ch = parseFloat(ch);
    
    switch(ch) {
        case 1 :
            console.log(" Monday");
           break;
        
        case 2 :
            console.log(" Tuesday");
           break;
    
        case 3 :
            console.log(" Wednesday");
           break;

        case 4 :
            console.log(" Thursday");
           break;
    
        case 5 :
            console.log(" Friday");
           break;

        case 6 :
            console.log(" Saturday");
           break;
    
        case 7 :
            console.log(" Sunday");
           break;

        default :
            console.log("Enter Valid Choice!");
           break;
           
    }
    rl.close();

        });
    });
});