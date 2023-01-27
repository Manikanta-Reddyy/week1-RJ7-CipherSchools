//Default Params

// Method-1 using function

// function addTwoNumbers(num1,num2){
// return num1+num2;
// }
// console.log(addTwoNumbers(1,2));

// method-2 Using arrow function

// let addTwoNumbers=(num1,num2) => num1+num2;

let addTwoNumbers=(num1 =20,num2 = 8) => {
    console.log(num1,"+",num2);
    // console.log(num2);
    return num1+num2;
}
console.log(addTwoNumbers());