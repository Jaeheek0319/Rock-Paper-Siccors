const data = process.argv;
const fs = require("fs");


console.log(data);

const operation = process.argv[2];
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])


console.log(operation, num1, num2);

if(operation === "add") {
 const ans = num1 + num2
    console.log(ans)  
}

if(operation === "multiply") {
    const ans = num1 + num2
       console.log(ans)     
   }

if(operation === "devide") {
    const ans = num1 + num2
       console.log(ans)     
   }

if(operation === "subtract") {
    const ans = num1 + num2
       console.log(ans)    
   }


