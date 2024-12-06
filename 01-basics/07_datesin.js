// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2005, 23, 12)
// let myCreatedDate = new Date("23-12-2006")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// let myCreatedDate = new Date(2006, 11, 23); 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "short",
    timeStyle:''
})



