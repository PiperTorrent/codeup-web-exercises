"use strict";



console.log('yay! I completed the warmup');



//My Take
// function fb(num){
//   for (let x = 1; x <= 100; x++) {
//       if (x % 15 === 0){
//       console.log("fizzbuzz");
//   } else if (x % 3 === 0){
//       console.log("fizz");
//   }else if (x % 5 === 0){
//       console.log("buzz")
//   } else {
//        console.log(x)




// FizzBuzz Practice

function fizzBuzz(limit) {
    if (limit === undefined){
        limit = 100;
    }

    for (let x = 1; x <= limit; x++){
        if (x % 15 === 0){
            console.log("fizzBuzz");
        }else if (x % 3 === 0){
            console.log("Fizz");
        }else if (x % 5 ===0){
            console.log("buzz");
        }else {
            console.log(x);
        }
    }
}
fizzBuzz();


//Warm up
//write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together

function allFirstLetter(arr) {
    let bucket = "";
    for (let el of arr);{
        bucket += el [0];
    }
    return bucket;
}
const testArrStrings =["dog","cat","frog","bat"];
console.log(allFirstLetter(testArrStrings))



