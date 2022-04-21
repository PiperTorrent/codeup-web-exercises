//2
function showMultiplicationTable(num) {
    for (let x = 1; num * x <= num * 10; x++) {
        console.log(num + "x" + x + '=' + (num * x))
    }
}

console.log(showMultiplicationTable(7))


//3
for (let x = 10; x < 20; x++) {
    let random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even")
    } else {
        console.log(random + " is odd")
    }
}

//4
for (let x = 1; x < 10; x++) {
    let str = toString().repeat()

    console.log(str)
}