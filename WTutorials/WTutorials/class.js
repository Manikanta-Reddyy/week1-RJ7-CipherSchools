// class
class Animal{
    noOfLegs;
    color;
    family;
    sound;
//cannot create more than one constructor for class in js
    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs=noOfLegs;
        this.color=color;
        this.family=family;
        this.sound=sound;

    }
showAnimal(){
    console.log("The animal belongs to family " +this.family);
}
}
let animal = new Animal(4, "yellow", "roden", "something");
// console.log(animal);
animal.showAnimal();