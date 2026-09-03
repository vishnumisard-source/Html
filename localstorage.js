localStorage.setItem("username","vishnusaireddy2002@gmail.com");//key value pair 
//run now u will see up number copy paste in chrome it will open inspect go to applications see local storage u will see username and password
//right side 3 dote click see hide and open console drawer like that

//......................................//
localStorage.removeItem("username");


localStorage.setItem("password","pooja@gmail.com");//update

var password=localStorage.getItemItem("username");
console.log(password);//u will get the password

//Session storage
//session storage is browser storage mechanism that stores data temporarily as key value pair .the stored datais avaiable only during the current brower tab session and is automaticallyb removed when the tab or browser is closed.
localStorage.clear();//it will clear all this 