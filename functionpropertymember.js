//property function

function Car(carname,brand){

}
//type car. u will get properties it is pre defined properties
console.log(Car.name);//car
console.log(Car.length);//

//prototype
//It is property(constructor function) in js used to establish the inheritance ad share the methods among instances craeted by that function when it is used as constructor.
function Car(){
    console.log("Car");

    this.brand="Toyato";
    this.model = "Camry";
    console.log(this);
}

//prototype so remove var and use protype to share the methods to function
//var getInfocar = function(){
Car.prototype.getInfocar = function(){
    console.log("car is brand ");
    consolr.log(this);
}
// console.log(this) for both like function and method give same
//Car();//window
let newCar =new Car();//use constructor now represts the car
newCar.getInfocar();
//we can take multiple prototype also we can do that one 