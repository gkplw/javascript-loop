// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

//Start coding here
// for(let i = 0;i<companyName.length;i++){
//     console.log("Number " + (i + 1) + " character " + companyName[i]);
// }

let count = 1;
for(let i of companyName){
    console.log("Number " + count + " character " + i);
    count++;
}