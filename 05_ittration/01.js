// for

for (let i = 1; i < 10; i++) {
    const element = i;
    if (element == 5){
       // console.log("5 is best number ");
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
       // console.log(i + '*' + ' = ' + i*j);
    }
    // let myArray = ["flash", "batman", " superman"]
    // console.log(myArray.length);
}
// for (let index = 0; index < myArrayArray.length; index++) {
//     // console.log(element);
    
// }


//  break and continue

// for (let index = 1; index <= 20; index++) {
//     console.log(`value of i is ${index}`);
    

// if (index == 5) {
//     console.log(`Detected 5`);
//     break 
// }
// console.log(`value of i is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
    console.log(`value of i is ${index}`);
    

if (index == 5) {
    console.log(`Detected 5`);
    continue 
}
console.log(`value of i is ${index}`);
}
