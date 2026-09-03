//var age = 10;
//console.log(age);
// this is comment single line comment
/* multi line comment
multi
multi
*/
//we can resign the var keyword and assaign a new value to the variable
//var age = 20;
//var age = 30;
//but let can be  assaign the new value to the varaible
/*let age = 10;
age = 20;
age = 30; this is correct */

//but cant redeclear means let age = 40 it is wrong

//consrt is used to declare a variable that cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. For example:
//const age = 10;
//age = 20; and const age = 30 also we cant// This will throw an error because age is a constant variable

//datatype means the type of value that a variable can hold. In JavaScript, there are several data types, including:
//primitives are the basic data types in JavaScript that are not objects and have no methods. The primitive data types in JavaScript are:
//1. Number: represents numeric values, such as 10, 3.14, or -5.
//2. String: represents text values, such as "Hello" or 'World'.

//numbers
let age = 10;
let noOfitemspriceAverage = 12.25;
let pivalue = 3.14;

console.log(age);
console.log(noOfitemspriceAverage);
console.log(pivalue);


//string

//let technologyname = 'JavaScript';
//let technologyname = `JavaScript`; it uses backticks and it is used for template literals
//let technologyname = "JavaScript";
//console.log(technologyname);

let marketposition = 1;
let subjective = "javasciript"
let aboutjs = `${subjective} is no ${marketposition} programming language in the world`;
console.log(aboutjs);

//boolean
let isAdmin = true;
console.log(isAdmin);

//undefined
let userName;
console.log(userName); //undefined

//null
let userRole = null;
console.log(userRole); //null

//symbol
let uniqueId = Symbol('id');//uses the Symbol() function to create a new symbol with the description 'id'.
console.log(uniqueId); // Symbol(id)






