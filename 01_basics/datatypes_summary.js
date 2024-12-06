// Primitive datatypes

// 7 types : String, Num, Boolean, null, undefind, symbol, BigInt

const score = 100;
const scoreValue = 200.3;

const isLoggenIn = false;
const outsideTemp = null;
let userEmail; // This is undefind

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 34234245345345495883890n;

// Refrence (Non Primitive)

// Array, Object, Function

const heros = ["superman", "thor", "batman", "arham"];
let myobj = {
  name: "Arham",
  age: 23,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber);
