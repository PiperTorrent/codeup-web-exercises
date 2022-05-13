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

// function allFirstLetter(arr) {
//     let bucket = "";
//     for (let el of arr);{
//         bucket += el [0];
//     }
//     return bucket;
// }
// const testArrStrings =["dog","cat","frog","bat"];
// console.log(allFirstLetter(testArrStrings))




const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
//tallest hamster
function tallHam(arr) {
    let tallest = {heightInMM: 0};
    for (let hamster of arr) {
        if (hamster.heightInMM > tallest.heightInMM) {
            tallest = hamster;
        }
    }
    return tallest;
}
console.log(tallHam(hamsters));

//fur color
function furColor(arr){
    let col= {fur:[]};
    for (let hamster of arr){
        if (hamster.fur.length > col.fur.length );{
            col = hamster
        }
    }
    return col;
}

console.log(furColor(hamsters))

//Write a function that will accept a string. It should return an object with the following properties: string, size, containsLetterFromRSTLNE, and isOneWord.
function makeObj(str){
    const obj ={};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord =str.indexOf(" ") < 0;
    let lc = str.toLowerCase();
    if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n") || lc.includes("e")) {
        obj.containsLetterFromRSTLNE = true;
    } else {
        obj.containsLetterFromRSTLNE = false;
    }
    return obj;
}
//
// console.log(makeObjectFromString('tacocat'));
// console.log(makeObjectFromString('John Jacob'));
// console.log(makeObjectFromString('Kacy Bobby'));

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//x = fruits, y = be my string
function allIndexOf(x,y) {
    for ( let x = 0; x < fruits.length; x++){
        return x [3];
    }
}
console.log(allIndexOf(fruits,"apple"))
console.log(allIndexOf(fruits,"guava"))

//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(x,y) {
//     let bucket = [];
//     for (let i = 0; i < x.length; i++){
//         if( x[i] !== y){
//             bucket.push(x[i]);
//         }
//     }
// return bucket;
// }
// console.log(removeAll(bugs,'roach'))

//:[ FUCK!
// for (let i = 10; i > 0; i--){
//     console.log(i);
// }

