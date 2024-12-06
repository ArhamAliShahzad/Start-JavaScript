

// function sayMyName() {
//     console.log("a");
//     console.log("r");
//     console.log("h");
//     console.log("a");
//     console.log("m");

// }

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // console.log(number1 + number2);
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("result: ", result);

function LoginUserMessage(username = "sam"){
// ! convert ture of false
    // if (!username) {
        
    // }
    if(username === undefined){
        // console.log("PLease enter a username");
        return
    }
    return `${username}just Logged in` 
}

// console.log(LoginUserMessage("arham"));


function calculateCartprice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartprice(200, 400, 500));


const user = {
    username: "arham",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}

// handleObject(user)
handleObject({
    username:"arham",
    price:199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 700]));