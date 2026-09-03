// this keyword
//this keyword refers to the context or object that is currently executing the code
//global context or scope : this refers to global object(window in brower)

console.log(this);//output window type in console see

var authors = ["tagore","Roling"];
var books = ["Geethanjali","potter"];
console.log(this);//this 2 also include in the windows type now

//note if we desiging any varaible with using var keyword by default it become global scope 
//now take function
var getbookDetails = function(){
    return books;
}
console.log(this);//now getbookdetails will be included
//direct use this keyword
this.authors = ["tagore","Roling"];
this.books = ["Geethanjali","potter"];//same output only we will get
//use let now
let achievemnets = ["Nobel prize","National"]; //it is not display because it is not global context


//object context:Inside a method of an object, this refers to the object itself

var obj = {
    name:"Tagore",
    dob:"May 7,1976",
    books:["geethanjali","Gora"],
    achivements:["Nobel anthens","National"],
    getbookDetailss:function(){
        console.log(this);
        console.log(this.acheivements);
    }
}
obj.getbookDetailss();//output which is there here that only will appear
//if we give output of function and printing it will be become undefined

//constructor functions: this refers to the new object being created

function getauthordetails(){
    this.name = "Tagore";//we will get function name getauthordetails in that tagore 
    console.log(this);//output in console is window it means global object
}
getauthordetails();//window object only  in that it will include 
//use new keyword
new getauthordetails();//in console we will get getauthordetails() function itself

//Arrow function : Do not have their own this. They inherit this from the parent scope at the time they are defined
var obj1= {
    name:"Tagores",
    dob:"May 7,1978",
    books:["geethanjali","Gora"],
    achivements:["Nobel anthens","National"],
    getbookDetailsss:()=>{
        console.log(this);//refer into global context only
        console.log(this.acheivements);//undefined beacause this keyword preferring gloval scope only
    }
}
//now take var and store that time we will get output in that