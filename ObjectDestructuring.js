//Object Destructuring

let details = {
    name : "Alex",
    age : 20,
    address: {
        city: "Bapatla",
        district: "Guntur",
        state: "Andhra Pradesh",
        country:"India",
        passportDetails:{
        passportNumber:"AP06US5341",

    },
},
};
// console.log(details.address.passportDetails.passportNumber);
// console.log(details.address);
let passportNumber=details.address.passportDetails.passportNumber;
console.log(passportNumber);