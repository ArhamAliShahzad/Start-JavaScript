// singleton
// Object.create

// objects literals

const mysym = Symbol("key1")


const JsUser = {
    name:"arham",
    "full name": "Arham Ali Shahzad",
    age: 17,
    [mysym]: "key1",
    location: "lahore",
    Email : "arham17@google.com",
    Isloggedin: false,
    LastLoginDay:["Monday", "Saturday"]


}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser[mysym]);
JsUser.Email = "arham23@goole.com"
JsUser.Email = "arham23@goole.com"


JsUser.greeting = function () {
    console.log("Hello js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());