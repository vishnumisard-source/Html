//conditional statement : execute the different blocks of code based on certain conditions
// true or false
// type 1: if,else if,else

//if(condition){

//}
if(true){
    console.log("student exceuted");
}
//if false statement not executed

let bankaccount = true;
if(bankaccount = true)
{
    console.log("account no: ","12344");
}
//in case false not exceuted

//else if
let primeaccess = false;
let staraccess = true;
if(primeaccess){
    console.log("having access prime");
}
else if(staraccess)
{
    console.log("acess having star");//it will print beacuse it is true
}
//if in 2 statements both true first statemnet only it will trye not go to another 
//it means after true non of the block is executed
//if all false no statement has true then use the else 
let primeaccess1= false;
let staraccess1 = false;
let hotstar = false;
if(primeaccess){
    console.log("having access prime");
}
else if(staraccess)
{
    console.log("acess having star");//it will print beacuse it is true
}else if(hotstart){
    console.log("access thehotstar");
}
else{
    console.log("You dont have acess to the  ottd");//it will print else statement dont have any condition 
}



//type2 : switch case checks the value against multiple cases and executes the matching block of code.
//here break is used to stop default is used if no case matches 
let platform = "amazonprime";
let ott1platform = "Amazonprime";
let ott2platform = "Netflix";
let ott3platform = "Sonylive";
switch(platform){
    case ott1platform:{
           console.log("amazonprime");//this will be printed
           break;
    }
    case ott2platform:{
           console.log("amazonprime");
           break;
    }
    case ott3platform:{
           console.log("amazonprime");
           break;
    }
     default:{
           console.log("amazonprime");//no input or wrong input u will get this
    }
   
}

