//Using this with function method members
//call,apply and bind used to control
let bankDetails ={
    name :"HDFCBank",
    founder:"Hasmukbhai Parak",
    getbankdetails : function() {
    //getbankdetails : function(argument1,argument2) {
    //console.log(argument1);
    //console.log(argument2);

        console.log(this);//print all in console like name ,founder and getbandetails() like this 
        console.log(this.name);
    }
}

console.log(bankDetails.getbankdetails());
//now we have to pass the bankdetails1 into the function of getbankdetails how  use the call method indiviually pass 
//call method immediately invokes the function this set to the provided value and any additional arguments passed individually.
let bankDetails1 ={
    name :"HDFCBank1",
    founder:"Hasmukbhai Parak1",
}
bankDetails.getbankdetails.call(bankDetails1);//to send object to expected function
//bankDetails.getbankdetails.call(bankDetails1,"1993","5,377"); we can pass the parameters alos here 

//apply method works like call but takes an array of arguments instead of passing them individually
//.is prebuilding method we will get the methods
//bankDetails.getbankdetails.apply(bankDetails1,["1933","5,377"]);

//bind:it does not immediately call the function. Instead, it returns a new function with this set to the speific value and arguments present if provided.
//bankDetails.getbankdetails.apply(bankDetails1,"1933","5,377"); 
//it wont give the output it will give the new function
//like function(argument1,argument2) {
    //console.log(argument1);
    //console.log(argument2);

        //console.log(this);//print all in console like name ,founder and getbandetails() like this 
        //console.log(this.name);

        
