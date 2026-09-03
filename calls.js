//understand type of calls
//call type:refers to how functions or operations are executed in a program
//whether one after another or independently and it determines the flow of execution: either 
// synchronously or asynchronously(2 types)

//synchronous type of execution tasks run sequentaially,one after another (each task must complete fully then go another task)
function stepone() {
    sleep(5000);
    console.log("start");
}
function steptwo() {
    sleep(3000);
    console.log("two");
}
function stepthree() {
    sleep(8000);
    console.log("three");
}
stepone();
steptwo();
stepthree();

//to time some time after it will come output
function sleep(callsecond) {
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + 5000;

    while (new Date().getTime() < endDateTime) {
        // console.log("processing");
    }
}

//asynchronous type of execution tasks run independently without waiting from previous one to finish.
//three approahes:callback function,promises,async/await we develop by this 
//asynchronoua by call back 

setTimeout(() => {
    var stepone = "step one";
    console.log(`${stepone}`);
}, 8000)
setTimeout(() => {
    var steptwo = "step one";
    console.log(`${steptwo}`);
}, 3000)
setTimeout(() => {
    var stepthree = "step one";
    console.log(`${stepthree}`);
}, 6000)

//another example
function Downloadvideo() {
    var workname = "video";
    console.log(`$(workname) is Doe`)

    setTimeout(() => {

        console.log(`${workhome} had downloaded`);//2nd it will print
    }, 8000)
}

function chatwithfrds() {
    var work = "frds";
    console.log(`$(work) is Doe`)

    setTimeout(() => {

        console.log(`${work} chatted`);//first it will print
    }, 6000)
}

Downloadvideo();
chatwithfrds();

//call back handle only sychrouns only not ashroymns
