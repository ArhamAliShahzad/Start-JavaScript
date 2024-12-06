const name = "arham"
const repocount = 50


// console.log(name + repocount + "value");

console.log(`Hello my name is arham ${name} and my repo account is ${repocount}`);


const gameName = new String('arham-ali-shahzad')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());     
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
 


const newstring = gameName.substring(0, 4)
console.log(newstring);



const anotherstring = gameName.slice(-5, 4)
console.log(anotherstring);


const newstringOne = "  arham  " 
console.log(newstring);
console.log(newstring.trim());


const url = "https://hitesh%20choudhary"

console.log( url.replace('%20', '-') );

console.log(url.includes('arham')); 

console.log(gameName.split('-'));