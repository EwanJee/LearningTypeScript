function add(n1 : number,n2 : number, showResult : boolean, phrase : string){
    let result = n1+n2;
    if(showResult){
        console.log(phrase + result);
    }
    else{
        return result;
    }
}
let number1 : number = 5; // 5.0
const number2 = 2.8;
// all numbers are floats default in typescript

const printResult = true;
const resultPhrase = 'Result is: ';

add(number1,number2, printResult, resultPhrase);