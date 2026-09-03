//callbackfunction : function can accept other function as parameter
function myname(){
    console.log("name is sai");
}
//myname();
//predefined function (taking the parameter as parameter )
setTimeout(myname,2000);
//example 2
function myname1(){
    console.log("name is vis");
}
function setname(callbackfn){
    setTimeout(callbackfn,3000);
}
//we can pass the named function,anoumyous ffunction or arrow function
setname(myname1);

//Anoumyous function means which doesnothave a name
//setMyname(function(){
 //   console.log("name is karthick");
//})

//arrow function witout function name
//setMyname(()=>{
 //   console.log("name is karthick1");
//})

//how  to pass the js as an argument  in callback
function executeSkill(callbackfn){
    callbackfn("js")
}
executeSkill((skill)=>{
    console.log(`my name is sai and my skill is ${skill}`)//output is my name is sai and my skill is js
})

//how  to pass the skillname as an argument  in callback
function executeSkill(skillname,callbackfn){
    callbackfn(skillname)
}
executeSkill(".net",(skill)=>{
    console.log(`my name is sai and my skill is ${skill}`)//output is my name is sai and my skill is .net
})