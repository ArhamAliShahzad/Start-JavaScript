// premitive

// types: string, number, bolean, null, undefind, symbol, Bigint 

const score = 100
const scorevalue = 100.3

const IsloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 21392648975436790832907n







// refrence (non-premitive) 

// Array, Objects, Functions



const heros = ["spiderman", "superman", "Thor"];

let myObj = {
    name: "arham",
    age: 17,
}


const myFunction = function name() {
    // console.log("Hello World");
}


console.log(typeof bigNumber);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Premitive)

let myYoutubename = "arham"

let anothername = myYoutubename

anothername = "arhamali"

console.log(myYoutubename);
console.log(anothername);


let user1 = {
    email: "arhamalishahzad17@gmail.com"
}

let userTwo = user1

userTow.email = "arham@gmail.com"
console.log(user1.email);
console.log(userTwo.email);

