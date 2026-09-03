//promise that represent the result of task that is completed or not ,it means help to manage future success or failure 
//advantages:
//avoids call back hell and support multiple async calls using chaining with then() method
//resolve and reject it will handle results nad errord
//manage asynchrouns operations cleanly
//.catch() handle for errors and syntax using new keyword

const mypromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("success");//come and store to sucessresult,if we used then resolve metod is called and parameters passed
    }
    else {
        reject("fail");
    }
});
//usage
mypromise.then((successResult) => {
    console.log(successResult);
}).catch((Failureresult) => {
    console.log(Failureresult);
});

//handle asynchrouns calls by multiple promises
//without creating new varaible create function and do
function myPromise() {
    new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve("success");//come and store to sucessresult,if we used then resolve metod is called and parameters passed
        }
        else {
            reject("fail");
        }
    });
}
//example
function getFirstauth() {
    return new Promise((resolvefn, rejectfn) => {
        setTimeout(() => {
            console.log("task completed");
            resolvefn("tagore");
        }, 4000)
    })
}

function getsecondauth() {
    return new Promise((resolvefn, rejectfn) => {
        setTimeout(() => {
            console.log("task completed");
            resolvefn("sai");
        }, 6000)
    })
}

function getthirdauth() {
    return new Promise((resolvefn, rejectfn) => {
        setTimeout(() => {
            console.log("task completed");
            if (true) {
                resolvefn("arundanthi");
            }
            else {
                rejectfn("No author");
            }
            rejectfn("arundanthi");
        }, 3000)
    })
}
//usage
//chaining mechnism 11 sec
getFirstauth().then((sucessmessage) => {
    console.log(successmessage);
    return getsecondauth();
}).then((sucessmessage2) => {
    console.log(sucessmessage2);
    return getthirdauth();
}).then((sucessmessage3) => {
    console.log(sucessmessage3);
}).catch((failurefn) => {
    console.log(failurefn);
})

//parallel machism  in 3 sec
console.time("PromisesTime");
Promise.all([getFirstauth(), getsecondauth(), getthirdauth()]).then((allmessages) => {
    console.log(allmessages);
    console.timeEnd("PromisesTime")
})
//comment all usage and run

//calls can by run 2 methods parrallel and chain


