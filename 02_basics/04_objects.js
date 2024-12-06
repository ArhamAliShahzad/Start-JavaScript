// const tenderUser = new Object = ()
const tenderUser = new Object = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tenderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullname : {
        userfullname:{
            firstname: "arham" ,
            lastname: "ali"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign ( {}, obj1, obj2 )


const obj3 = {...obj1, ...obj2}


// console.log(obj3);


const users = [
    {
        id: 1,
        email: "arham@gmail.com"
    },
    {
        id: 1,
        email: "arham@gmail.com"
    },
    {
        id: 1,
        email: "arham@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(objects.keys(tinderUser));
console.log(objects.values(tinderUser));
console.log(objects.entries(tinderUser));

console.log(tinderUser.hasOwnproperty('isloggedIn'));
 



const sourse = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh   "
}

// course.courseInstructor

const {courseInstructor: instructor} = courseInstructor

console.log(courseInstructor);


// react destructuros

// const navbar = ({company}) => {

// }

// navbar(company = "arham")

// Api Json 

// {
//     "name": "arham",
//     "coursename": "js in hindi" ,
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]\


console.log(arham);