//.filter()

// let array = [5,10,15,20,30];
// let newArray= array.filter((element)=>element>=30);
// console.log(newArray);

let array=[5,10,15,20,30];
let temp=array.find((value)=>{
    return value>10;
});
console.log(temp);