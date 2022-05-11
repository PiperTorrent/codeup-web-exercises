"use strict"

let num;

while (true){
    num = parseFloat(prompt("I DEMAND AN ODD NUMBER...please >o<"));
    if (num % 2 !== 0 && num >= 1 && num <= 50){
        break;
    }
}

for (let j = 1; j <= 50; j +=2){
    if (j === num){
        console.log("skipping " + num);
        continue;
    }
console.log(j);
}