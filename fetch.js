//fetch is bult in function which is uused to handle http requests like get,post,etc and returns the promise
//example
fetch('https:??jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    //console.log(response);
    //console.log(response.json())//print the promise
    return  response.json();
}).then((Jsondata)=>{
    console.log(Jsondata);
})
