//singleton object 

//const tinderUser= new Object()

//Object.create

// const tinderUser={}

// const JsUser = {}


// Interview asked quetsions 
//create a symbol and find that datatype is symbol help of an object

const mySym = Symbol("key1")

const JsUser = {
    name:"Arpit",age:18,"fullname":"Arpit Verma",[mySym]:"key1"
    ,location:"Kanpur",
    email:"av6821246@gmail.com",isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}

// how to declare object object literals
// const JsUser={
//     name:"Arpit",age:18,"fullname":"Arpit Verma",
//     location:"Kanpur",
//     email:"av6821246@gmail.com",isLoggedIn:false,
//     LastLoginDays:["Monday","Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log(JsUser[mySym]);//printing as an object interview asked above question

//provides new email value in jsuser object
JsUser.email="av6821246@chatgpt.com"


Object.freeze(JsUser)//freezes the object which can't changes the values
JsUser.email="av6821246@gpt.com"

console.log(JsUser);

//function creating performing 
// JsUser.greeting=function(){
//     console.log("Hello JS User");
// }
// JsUser.greetingto=function(){
//     console.log(`Hello JS User,${this.name}`);//string interpulation
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingto());


const obj1={1:"a",2:"b"}
const obj2={4:"a",5:"b"}


// const obj3={obj1,obj2}
// const obj=Object.assign({},obj1,obj2)//it uses to join or merge both the objects



const obj=Object.assign(obj1,obj2)//obj-{ '1': 'a', '2': 'b', '4': 'a', '5': 'b' } and // obj1-{ '1': 'a', '2': 'b', '4': 'a', '5': 'b' }where obj1 stores unique key elements dont depens on values
// console.log(obj)
// console.log(obj1)

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));


 const tinderUser={}
 tinderUser.id=101
 tinderUser.name="Samay"
 tinderUser.isLoggedIn="False"

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

