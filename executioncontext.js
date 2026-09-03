//Execution context sciript.js acess the all it is called global block varaible inside the only ,if local block inside local like chaining is called scope
var greencolor = "green";


//local block
{
    //console.log(greencolor);//green
    //let bluecolor = "blue";
    //console.log(pinkcolor);//error
}
//local block /local block
{
    //console.log(greencolor);//green
    //let pinkcolor = "Pink";
    //console.log(bluecolor);//error
}

var signal = "wifi";
//local block 1
function room1(){
    let room1fan = "speed";
   console.log(signal);
   //console.log(room2fan);//error
   console.log(room1fan);
}
room1();
//local block 2
function room2(){
    let room2fan = "slow";
console.log(signal);
//console.log(room1fan);//error
console.log(room2fan);
}
room2();
//console.log(room1fan);//error


//scope chain means accessing only child scope only

{
    //block1 - scope1
    let fruit1 = "Apple"
    {
        //block2-scope2
        let fruit2="Mango";
        {
            //block3-scope3
            console.log("scope3: ",fruit1);
            console.log("scope3: ",fruit2)
        }
        console.log("scope2: ",fruit1);
        console.log("scope2: ",fruit2);
    }
    console.log("scope1: ",fruit1);
}

//degugging means pauses code exceution at the specified point, allowing inspection in developer tools.

let fooditems = "pizza";
console.log(fooditem);
debugger;
let fooddel = "ram";
console.log(fooddel);


debugger;
//we can check the code while running the code see upto 59 line it will stop and nextbreak
//f8 -> continue ruunig the code upto nextbreakpoint press f8
//next line f10 press
//for distable stop f8 all will stop 

function foodapp(item){
    console.log("Foodapplication");
    console.log("Fooditem is",item);
}
foodapp();
//inside the function complier will not go willing calling only it will exceution will be done
//so it will go to line number 76
//if i want to go inside function means press f11 it will go 73 line aagain press f10(stepover) it will come down
//now pass the value in foodapp() then press f11 it will go to function inside agaian press f10 for next step
//press f11 to step over inside the function means jumping from one function into another function
//shift+f11 : step out of the current function