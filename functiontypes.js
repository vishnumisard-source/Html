//function and its types
//Named function - with a specific name that can be called .
//Anonymous function - Doesnot have the name 
//Arrow function - without using the function name, code used for comparing with named function easily we can use in callback function 

//Anonymous function we can use without needing to reference by its name
//var showbookname=function(){
 //let bookname = "Potter";
  //  console.log(bookname);
//}
//call the function
//showbookname();

//var bookdetails=function(bookname,authorname,dob){
//       console.log(bookname);
 //      console.log(authorname);
 //      console.log(dob);
//}
//bookdetails("gethajali","tagore","May 7,1980");

//Anonymous is defined as  function expression 
//call back function - function can accept otherfunction as parameter
(
    function() {
        console.log("hello");
    }
)()
//this is called efi function or imdetaitely function expression and we can pass the parameters also no issue.

//call back function - predefined function
function sayhello(callbackfn){
   callbackfn(10,20);
}
sayhello(function(a,b){
    console.log("HEllo sir");
    console.log(a);
    console.log(b);
});
//after some time of intervel block statement automatically trager
setTimeout(function(){
    console.log("Test");
},3000);
//3000 means 3seconds we can in this case also anoanaymous function
//this aaf pass also parameters also to the function



//Arrow function : shortcut function using not using the function name using the arrow we can create the block of statemments we can use for quike and call back functions
//syntax ()=>{
    //statements
    //}
//function showauthorname(){
 //   console.log("Rabindranth");
//}

//converting into arrow
let showauthorname = () =>{
    console.log("Rabindranth");
}
showauthorname();


//function showauthordetails(authorname,dob,bookname){
 // console.log(authorname);
 // console.log(dob);
  //console.log(bookname);
//}
//showauthordetails("tagore","May 8,1967","garder");

//converting into arrow
//let showauthordetails = (authorname,dob,bookname) =>{
//console.log(authorname);
//console.log(dob);
//console.log(bookname);
//}
//showauthordetails("tagore","May 8,1967","garder");


//using return
//function getAuthorDetails(fullname,dob,bookname,published){
//    return `Author Details-${fullname},${dob},${bookname},${published}`;
//}
//let authordetails=getAuthorDetails("Munshi","July 18,1978","Nirmala",1987);
//console.log(authordetails);

//this function converting into arrow function

let getAuthorDetails = (fullname,dob,bookname,published) =>{
    return `Author Details-${fullname},${dob},${bookname},${published}`;
}
let authordetails=getAuthorDetails("Munshi","July 18,1978","Nirmala",1987);
console.log(authordetails);

//convert anonyouns function into arrow function
//var sayhelofun = function(){
  //  console.log("Sayhello");
//}
//sayhelofun();

//arraow function->we can pass the parameters also

var sayhelofun = () =>{
    console.log("Hello say");
}
sayhelofun();

//this tiem using arrow function
setTimeout(()=>{
    console.log("Test1");
},5000);