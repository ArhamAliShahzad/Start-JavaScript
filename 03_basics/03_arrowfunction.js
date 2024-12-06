// this crunnent content ko refer karta hy


const user = {
    username: "arham",
    price: 999,


    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "arham"
// user.welcomeMessage()



// function chai() {
//     let username = "arham"
//     console.log(this.username);

// }

// chai()

const chai = () => {
    let username = "arham"
    console.log(this.username);

}

// chai()

// basic arrow function

// const addTwo = (num1, num2) => {
//     return  num1 + num2
// }


// 2nd method of arrow function

// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "arham"})


// console.log(addTwo(3, 4));

// const myArray = [2, 4, 5, 6, 7, 6]

// myArray.forEach()