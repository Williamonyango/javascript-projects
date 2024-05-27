function sumOfSquare() {
    let result;
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        result = i * i;
        sum = sum + result;
    }
    return sum;
}
function squareOfSum() {
    let square;
    let answer = 0;
    for (let i = 1; i <= 100; i++) {
        answer = answer + i;
        square = answer * answer;
    }
    return square;
}

function difference() {
   let Difference = squareOfSum()-sumOfSquare();
    console.log(Difference);
}

console.time("Execution time")
difference();
console.timeEnd("Execution time")



// Refactor 1 - Lawrence Tsungu - 0719702831

function diff(limit) {
    let sumOfSquare = 0;
    let squareOfSum = ((limit*(limit+1))/2)**2
   
    for (let i = 1; i <= limit; i++) {
        sumOfSquare += (i * i);
    }
    let difference = squareOfSum-sumOfSquare

    console.log(difference)
}
console.time("Execution time")
diff(100)
console.timeEnd("Execution time")



