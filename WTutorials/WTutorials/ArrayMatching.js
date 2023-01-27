// Array matchiing
// if(array1 == array2); //to check reference
// check length if not same then not matching
//run a for loop if array[i]=array 2[i] then arrays are matching otherwise no

//Object Matching
//same as array matching
let obj1 = {name: "Alex", age:21};
let obj2 = {name: "Alex"};
function areEqual(obj1, obj2) {
    if(obj1 === obj2){
        return true;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for(let key of Object.keys(obj1)) {
        if(typeof obj2[key] === "undefined") {
            return false;
        }
        if(obj2[key]!== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1==obj2));