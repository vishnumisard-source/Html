//non primitive data types are objects, arrays, and functions. These data types can hold multiple values and have methods that can be called on them. For example, an array can hold a list of values, and a function can be called to perform a specific task.

//arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[0]); //apple

let authors = ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien'];
let authorofbirth = [1967, 1948, 1892];
let bookonedetails = ['Harry Potter', 'A Game of Thrones', 1985,true];
console.log(bookonedetails[0]);
console.log(bookonedetails[1]);
console.log(bookonedetails[2]);
console.log(bookonedetails[3]); //Harry Potter

console.log(bookonedetails[10]);

//object
//object means a collection of key-value pairs.

let customDetails ={
    "Name":"sai",
    "Age":23,
    "Ano":"1467-2389-2137",
    //within object also we can create the arrays and objects also
    characterNames:["vishnu","sai","chaithu"],
    characterDetails:{
        characterName:"viahnU",
        role:"developer"
    }
}
//console.log(customDetails);
//console.log(customDetails.Ano);
//// console.log(customDetails.Name);

//or index also we can print the value 

console.log(customDetails["Name"]);
console.log(customDetails["Age"]);
console.log(customDetails["Ano"]);
console.log(customDetails["characterNames"][0]);
console.log(customDetails["characterDetails"].characterName);

//array of objects
// [] {} 

let cars = [
    {
        carName:"Tayoto",
        market:"1997-12-10"
    },
    {
        carName:"Tayoto ray",
        market:"1934-03-10"
    }

];
console.log(cars[0].carName);
console.log(cars[1].carName);

//functions is very important
var bookname = function(){
    console.log("vishnu is good");
}
console.log(bookname);
//dir means more details for the functions
console.dir(bookname);


