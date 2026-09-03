//comparison operators :==,===,!=,<,<=,>,>=
//logical- &&(and) and or(||)
console.log(1==1);
console.log(1==2);
let num = 4;
console.log(num==4);
console.log(num!=4);
console.log(num>4);
console.log(num<4);
console.log(num<=4);
console.log(num>=4);
//===
//Type coercison -> converting one type to another
//"1" -> 1 //string to number
//"2" -> 2
console.log(1 - "1");//1-1 = 0 only it will convert
console.log(1==1);//true
console.log(1=="1");//true it converts automatically
//=== checks type also
console.log(1==="1");//false

//logical operator
//and operator 
let emplid =1;
let empname = "vishnu";

console.log(emplid == 1 && empname == "vishnu");//true
console.log(emplid == 0 && empname == "vishnu");//false
console.log(emplid == 1 && empname == "sai");//false
console.log(emplid == 2 && empname == "karthick");//false

if(emplid == 1 && empname == "vishnu"){
    console.log("formed");//it will print
}
else{
    console.log("No employee found");
}
//or operator
let emplid1=1;
let empname1 = "vishnu";

console.log(emplid1 == 1 || empname1 == "vishnu");//true
console.log(emplid1 == 0 || empname1 == "vishnu");//true
console.log(emplid1 == 1 || empname1 == "sai");//true
console.log(emplid1 == 2 || empname1 == "karthick");//false

if(emplid == 2 || empname == "karthick"){
    console.log("formed");//print
}
else{
    console.log("No employee found");
}