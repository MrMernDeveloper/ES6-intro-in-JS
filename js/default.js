
/*
function add(first, second) {
    console.log(first,second)
    // if (second === undefined) {
    //     second = 0;
    // }
    if (second = second || 0) {
        second =0
    }
    const total = first + second;
    return total;
    
}

const result = add(10);
console.log(result);
*/


/*

// evaluation of es-6
function add(first, second =10) {
    
    const result = first + second;
    return result;
    
}

// const OutPut = add(10 );
const OutPut = add(10 ,20);
console.log(OutPut);
*/

function addString(firstStr, secondStr ='Hasan') {
    const result = firstStr + ' ' + secondStr;
    return result;
}

const yourString = addString('Rakib');
console.log(yourString);

const a = 10;
const b = 20;
console.log(`sumation of ${a} and ${b} = ${a + b}`)
//using back tik