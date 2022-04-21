
//1
function showMultiplicationTable(num) {
    for (let x = 1; num *  x <= num * 10; x++) {
        console.log( num + "x" + x + '=' + (num * x))
    }
}
console.log(showMultiplicationTable(7))
