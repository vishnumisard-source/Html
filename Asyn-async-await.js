//Asynchronous calls
//Async:async keyword is used to declare a function as asynchrouns.This measn the functio will always return a promise and its allowing you to use await inside it
//Await : await keyword allowing you to use await inside it.until the promise execute it pauses the execution
//simplifies asynchrouns and error handling

async function getauthorde() {
    return "tagore"; //output promise beacuse we use async keyword
}

//let result = getauthorde();
//console.log(result);

//use then now 
let result = getauthorde().then((response) => {
    console.log("Response is", response)//response is tagore
});
console.log(result);

//await keyword why used in async

function geethajibook() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("geethajali was written");
            resolve();
        }, 25000)
    })
}

async function getauthordetails() {
    console.log("Response is");
    await geethajibook().then((response) => {//if we await tell that to wait 
        console.log(response);
    })
    console.log("rabinfrath");
}


//another example 
async function getauthorde() {
    return new Promise((resolve) => {
        resolve("tagore1")
    });
}

let result1 = getauthorde().then((response) => {
    console.log(response);//tagore1
});
console.log(result);
// this case also we will get promise only 