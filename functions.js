//functions is a block of code that groups a set of a statements together to perform a specific task.
//allow the reuse the code
//block1
//function decleration
function showcustomerdetails(){
let customerid = 1;
console.log(customerid);

let customername = "vishnu";
console.log(customername);
}
//calling the function
showcustomerdetails();
//block2
function authorandcustomer(){
let authors = ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien'];
console.log(authors);

let booknames = ["potter","pridge","waves"];
console.log(bookname);

let authoryob = [1980,1978,1984];
console.log(authoryob);
}
authorandcustomer();


//normal text console how to set style
console.log("javascript");
//tp prepare style we are using the c

console.log("%cjavascript","color:blue");
console.log("%cjavascript","background-color:blue");

console.log("%cjavascript program","background-color:blue");

function redcolor()
{
    console.log("%c    ","background-color:red");
}
//redcolor();

//function in another function example means how to call this rescolor by three sections
function firstsection()
{
    console.log("%c    ","background-color:yellow");
    console.log("%c    ","background-color:lightgrey");
    redcolor();
}
firstsection();

function secondsection()
{
    console.log("%c    ","background-color:orange");
    console.log("%c    ","background-color:grey");
    redcolor();
}
secondsection();

function thirdsection()
{
    console.log("%c    ","background-color:black");
    console.log("%c    ","background-color:pink");
    redcolor();
}
thirdsection();

//function how to pass input parameters
function book(bookname,authorname,dob,pd){
   // default: function book(bookname,authorname,dob,pd="Data is not avaiable"){
   console.log("bookname: ",bookname);
   console.log("Authorname: ",authorname);
   console.log("DOD: ",dob);
   //we can use this beacause in place of undefined we can print this no data
   //pd = pd || "NO data available";
   console.log("PD: ",pd);
}
//book("gitananjali","rabindranath","may 7,1861",1910);

//there are three parameters optional,default and rest
//optional : that may or may not be provided when calling the function
//default : allows you to set a deafult value for  parameter if no aruggement is passed
//rest  to accept the an indefinite number of argumnents as an array

//optional parameter

//book("gitananjali","rabindranath","may 7,1861");
//now pd is optional parameter

//default parameter

//book("gitananjali","rabindranath","may 7,1861");
// default: function book(bookname,authorname,dob,pd="Data is not avaiable"){


//rest parameter is used when last parameter like four upto 10 we have so single paremeter we can set the array
//function book(bookname,Authorname,...additionalParams){ here from 3 to additionalpara
function book(...additionalParams){
console.log(additionalParams);
console.log("bookname: ",additionalParams[0]);
   console.log("Authorname: ",additionalParams[1]);
   console.log("DOD: ",additionalParams[2]);
   console.log("PD: ",additionalParams[3]);
}
book("gitananjali","rabindranath","may 7,1861",1910);
//it will be stored in array format

//Return and non return functions
//return 
//function getbookdetails(){
 //   let bookdetails="";
 //   bookdetails = bookname + " " + authorname;
 //   return bookdetails;
//}
//console.log(getbookdetails("gitanjali","tagore"));

//non return
function getbookdetails(){
    let bookdetails="";
    bookdetails = bookname + " " + authorname;
    
}
console.log(getbookdetails("gitanjali","tagore")) //undefined

