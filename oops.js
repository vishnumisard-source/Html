//oops:programming approach that uses classes and objects to organize the code,making the application easier to develop,reuse,and maintain.
//why we do use oop:-organizes code in a structiure manner,reusability,real world entuty in software
//main concepts of oop
//class,object,Encapsulation,Inheritance,Polymorphism,Abstraction

//class : It is a blueprint used to create objects.It grps related properties and methods into s single unit.
//main members of a class:
// constructor:Automaticcaly called when an object is createdusing a new keyword
// ,properties: are varianles that store an objects data
// ,methods:methods define the behaviour of an object

//object is an instance(taking omnership) of class.It is uded to acess the properties and methods defined inside the class 
//object is created from class
//a class can have multiple objects
//each object has own data,js new keyword is used to create an object


//blue print
class Employee {
    name = "";
    age = 5;

    //constructor automatically trier when we prepare the instance one type of method
    constructor() {
        console.log("Employee created");
    }

    //method inside of class only we will not create outside 
    display() {//void method ntg return so
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
//new Employee();
//new Employee().name;//acessing
const emp1 = new Employee();
console.log(emp1.name);
console.log(emp1.age);
emp1.display();

const emp2 = new Employee();
emp2.name = "sai";
emp2.age = 23;
console.log(emp1.name);
console.log(emp1.age);
emp1.display();

const emp3 = new Employee();
emp3.name = "indra";
emp3.age = 25;
console.log(emp1.name);
console.log(emp1.age);
emp1.display();


//function important points return type and parameters are so important

//Encapsulation:combaining related properties and methods into s single class and protects data from unauthorized access.
//access modified:private is used

//Banking related example
class BankAccount {
    //balance = 0;//public property
    #balance;//private property we cant modified outside of class

    constructor(balance) {
        console.log("Initial balance 1:", this.#balance);//unefined
        this.#balance = balance;
        console.log(this.#balance);//1000
    }
    deposit(amount) {
        this.#balance += amount;
    }
    //void
    withdraw(amount) {
        this.#balance - + amount;
    }
    //non void
    getbalance() {
        return this.#balance;
    }
}

const vishnuAccount = new BankAccount(1000);//o/p 1000;
vishnuAccount.deposit(500);//500
console.log("Balance after deposit:", vishnuAccount.getbalance());
vishnuAccount.withdraw(200);//
console.log("Balance after deposit:", vishnuAccount.withdraw());
vishnuAccount.deposit(2500);//
console.log("Balance after deposit:", vishnuAccount.getbalance());
//console.log("Intital balance: ",account.#balance);
//account.balance = 1000;//modifying public property
//console.log("Intital balance: ",account.balance);//Accessing public property

const saiAccount = new BankAccount(1000);//o/p 1000;
saiAccount.deposit(500);//500
console.log("Balance after deposit:", vishnuAccount.getbalance());
saiAccount.withdraw(200);//
console.log("Balance after deposit:", vishnuAccount.withdraw());
saiAccount.deposit(2500);//
console.log("Balance after deposit:", vishnuAccount.getbalance());

//Inheritance:It allow a child class to inherit the properties and methods of a parent class,promoting code reuse and reducing duplicate code.
//reduces the duplicate code
//child class can access the parejts propertues and methods 

class vehicle {
    brand;
    constructor(brand123) {
        this.brand = brand123;//public property interbally if we use this created by complier
    }
    start() {
        console.log(this.brand + "Started");
    }
}
//vehicle parent,child car
class car extends vehicle {
    model;
    constructor(cbrand, cmodel) {
        super(cbrand);//used to comminucate the parent constructor in child class only use
        this.model = cmodel;
    }
    displayDetails() {
        console.log("Brand: " + this.brand + "Model: " + this.model);
    }
}
//this keyword reference the current the current block

const car = new Car("BMW", "xs");//call this coomicate with constructir in car then go to parent means vehicle in brand

//polymorphism 
//same method to perform different actions(many forms)
//build the relationship 
//taking his child give the parent(own membeers +parent  memebers)


class Animal {
    makesound() {
        console.log("animal makes sound");
    }
}

class dog extends Animal {
    makesound() {
        console.log("dog makes sound");
    }
}

class Cat extends Animal {
    makesound() {
        console.log("cat makes sound");
    }
}

const dog = new Animal();
dog.makesound();//first check child if not there go to there parent

const Cat = new Animal();
Cat.makesound();//first check child if not there go to there parent


//abstraction:It hides the implementation details and exposes only the essential functionality to the user.

function abcd(){

}

//example
var a = "vishnu";

a.toUpperCase();

class payment{
    pay(){
        console.log("Payment done");
    }
}


class credited extends payment {
    pay(){
        console.log("payment through credited card");
    }
}

class upi extends payment {
    pay(){
        console.log("payment through upi");
    }
}
class netbanking extends payment {
    pay(){
        console.log("payment through netbanking");
    }
}

//
const payment = new upi();
payment.pay();//hiding the implementation

