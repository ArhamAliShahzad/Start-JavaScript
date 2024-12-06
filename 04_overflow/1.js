// if
// const isUserloggedIn = true
// const temrature = 41

// if (temrature < 50) {
//     console.log("less than 50");
// } else{
// console.log("temrature is greater than 50");}

// <, >, <=, >, ==, !=

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }


// const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else{
//     console.log("less than 1200");
// }

const userloggedIn = true 
const debitCard = true
const logggedInFromGoogle = false
const logggedInFromEmail = true


if (logggedInFromGoogle || logggedInFromEmail) {
    console.log("user logged in ");  
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "march":
        console.log("Feb");
        break;
    case "jun":
        console.log("March");
        break;
    case "dec":
        console.log("April");
        break;

    default:
        console.log("deafult case match");
        break;
}