//complexdatatypes(object,array,function or anyother datatypes) 2 types
//propert is a value that belongs to data type and holding the data.
//Method is a function and performs a specific action and can access or manipulate data

//access of members of an object
var author ={
    name : "tagore",
    dob : "may 7,1987",
    books :["gitanjali", "the world", "Gora"],
    getbookscount:function(){
        //console.log("Total books 3");
        return "Total books 3";
    }
};
author.name;
author.books;
//author.getbookscount();
console.log(author.getbookscount());

//memebers of an array
var books = ["gitanjali","world","Gora"];
books.length //3
//console.log(books.reverse());
console.log(books.pop());//remove the last value
console.log(books);