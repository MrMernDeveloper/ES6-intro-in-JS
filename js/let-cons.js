/*
let number = 100;
number = 900;
console.log(number);
*/

/*
const number = 90;
number = 900;
console.log(number);
*/

// const numbers = [11, 12, 13, 13, 14];

// // myArry.push(112);
// // console.log(myArry);

// for (let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
    
// }
// console.log(element);



// evaluation of ES-6 
function add(number1, number2) {
    result = number1 + number2;
    return result;
}

const add6 = (number1, number2) => number1 + number2;

const result = add6(20, 30);
console.log(result);

// arrow function 
const mutiply = (number1, number2) => number1 * number2;
const yourResult = mutiply(10, 10);
console.log(yourResult);

const getPie = () => 3.1416;

console.log(getPie())

const fiveTimes = number => number * 5;
console.log(fiveTimes(5));

// multiline code

const doMath = (x, y, z) => {
    
    const number1 = x + y;
    const number2 = y + z;
    const numberMultiply = number1 * number2;
    const result = numberMultiply / 2;
    return result;
}
console.log(doMath(1, 2, 3));