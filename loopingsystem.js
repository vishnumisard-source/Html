//looping system :set of statements to be executed repeatedly until a certain condition is met.
//for..of
//for(int;con;in/dec)
//for..of loop : iterates over elements of an iterable like arrays or strings. iterable means strigs or arrays
//for(variable of iterable)
//array 
var booklist=[
    {bookpo:1,bn:"eng"},
    {bookpo:2,bn:"ma"},
    {bookpo:3,bn:"te"}
]
for(var bookde of booklist){
    console.log(`${bookade}`);//3
    console.log(`${bookade.bn}`);//book names printed
}

//for..in
//for loop : repeats a block of code a specifuc number of times
//for..in loop: Interates over the properties of an object
//for(variable in object)
//object
var bookdet={
    bname:"Geethajali",
    bau:"tagore",
    bprice:250.00,
}
for(var property in bookdet)
{
    console.log(` propertyNames: ${property}`);//bname,bau,bprice
    console.log(`price of property: ${bookdet[property]}`);
}
//while loop:Repeats a block of code a specific number of times
//while(condition)
var bookpo=0;
var booklist1=[
    {bookpo:1,bn:"eng"},
    {bookpo:2,bn:"ma"},
    {bookpo:3,bn:"te"}
]
while(bookpo<7){
   console.log(`${bookslist[bookpo]}`);//7
   console.log(`${bookslist[bookpo].bn}`);
   bookpo = boopo+1;
}
//do-while loop:similar to while,but the block of code runs atleast once.
//do{
//}while(condition);

//do{
//     bookpo = boopo+1;
 // console.log(`${bookslist[bookpo]}`);//7
 //  console.log(`${bookslist[bookpo].bn}`);
   
//}while(bookpo<7)
