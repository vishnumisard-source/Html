//Error means during the execution of program such as synatx mistakes,incorrect variable usage or invalid operations
//complite time error ex:syntax error
//cons bankname = "canara"; this is complie time error we cant run because const should be there


//run-time error ex:caused by invalid operations or undefined  variablees
//const bankname = "canara";
//bankname = "hdfc"; 
//this is called run time error output u will get as uncaught type error
//another example
//let username;
//let usernamein = username.toUpperCase();

//example it will get error because constvalue cant change so how to handle this run time error using the exception handlinf try catch finally
//const bankname = "canara"
//       bankname = bankname.toUpperCase();

//      console.log(`welcome to ${bankname}`);

//let transactions = ["creditcard","debitcard","savings"];
//console.log(`no of transactions: ${transactions.length}`);

//Syntax
try {
    //code that may throw an error
}
catch (error) {
    //code that catch the error message
}
finally {
    //executes code regardless of whether an error occureed r not
}

//example
const bankname = "canara"
try {
    
    bankname = bankname.toUpperCase();
}
catch (ex) {
    console.log(ex.message);//we will get what error in this message
}
finally {
    console.log("task cpmpleted");
}
console.log(`welcome to ${bankname}`);

let transactions = ["creditcard", "debitcard", "savings"];
console.log(`no of transactions: ${transactions.length}`);

// this like also ok 

try {
    const bankname = "canara"
    bankname1 = bankname.toUpperCase();
    console.log(`welcome to ${bankname1}`);
}
catch (ex) {
    console.log(ex.message);//we will get what error in this message
}
finally {
    console.log("task cpmpleted");
}


let transactions1 = ["creditcard", "debitcard", "savings"];
console.log(`no of transactions: ${transactions1.length}`);

//how to correct the run time execution

try {
    let bankname2 = "canara"
    bankname2 = bankname.toUpperCase();
    console.log(`welcome to ${bankname2}`);
}
catch (ex) {
    console.log(ex.message);//we will get what error in this message
}
finally {
    console.log("task cpmpleted");
}


let transactions2 = ["creditcard", "debitcard", "savings"];
console.log(`no of transactions: ${transactions2.length}`);

//In catch block if we want to pass a message like error we thrownewError() -> inside the try block we can pass the own message

try {
    let bankname2 = "canara"
    bankname = bankname.toUpperCase();
    throw new Error("Server is down try after few minutes");
    console.log(`welcome to ${bankname}`);
}
catch (ex) {
    console.log(ex.message);//we will get what error in this message
}
finally {
    console.log("task cpmpleted");
}


let transactions3 = ["creditcard", "debitcard", "savings"];
console.log(`no of transactions: ${transactions3.length}`);
