// // Rest and spread operator are applicable in arrays and objects in JS
// let array=[5,10,15,20,25,30];
// let newArray=[...array];
// console.log("Array = ",array);

// //Spread Operator for arrays
// console.log("Spread Operator = ",...array);

// //Rest Operator
// let testFunction = (...args) => {
//     console.log(args);
// }

// let maxOfTwoNumbers = (num1, num2) => Math.max(num1,num2);
// console.log(maxOfTwoNumbers(5,6));

// let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1,num2, num3);
// console.log(maxOfThreeNumbers(8,9,7));

// let maxOfNumbers = (...numbers)=>{
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10,15,25,30));

  

// Spread Operator for objects
//shallow cloning == Partially copied or modified
let object = {
    name: "Alex",
    age: 20,
    city: "Bapatla",
};

let object2 = {...object, name:"cherry", country:"INDIA", state: "Andhra_Pradesh"};
console.log(object)
console.log(object2)