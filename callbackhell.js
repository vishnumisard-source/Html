//callback hell means where multiple nested callback functions create a pyramid-like structure.
//this type of code is difficult to read,understand and maintain
//means like one function into another and another into another like that structure
//syntax function(function(){
 //          function2(function(){
   //         function3(function(){

 //           });
//});
//});


function stepone(callbackfn){
    //sleep(5000);we can use that time here
    console.log("one");
    callbackfn();
}
function steptwo(callbackfn){
    //sleep(3000);
    console.log("two");
    callbackfn();
}
function stepthree(){
    //sleep(6000);
    console.log("three");
}
stepone(()=>{
    steptwo(()=>{
        stepthree();
    });
});

//output is stepone,steptwo,stepthree

function sleep(){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + 5000;

    while(new Date().getTime()<endDateTime){
        console.log("processing");
    }
}