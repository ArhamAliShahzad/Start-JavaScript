// const userEmail = "arham@.ai"
// const userEmail = ""
 const userEmail = []
  let x ="arham"
  let z= true
  let a= null
  


if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}empty function,

// if (userEmail.length === 0) {
//         console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1 ;
// // val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Ternary Opreator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice >= 90 ? console.log("less than 80"): console.log("more than 80");