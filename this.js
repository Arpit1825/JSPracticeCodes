//let var const 
const accountId=144553
let email="av6821246@gmail.com"
var accountPassword="12345"
accountCity ="Jaipur"
//Prefer not to use var cause of block or scope issue

// accountId=2 Not allowed cause const value
accountPassword="208022"
// console.log(typeof accountId);
// console.log(typeof email);
// console.log(accountPassword);
// console.log(typeof accountCity);


// console.table([accountId,accountCity,accountPassword,email])



//Arrow functions also used in react

// const user ={
//     username:"Arpit",price:990
// ,welcomeMessage:function(){
//     console.log(`${this.username}, welcome to website`);
// }}

// this Talk about current context what value whosoever is present


//change value of objects
// objname.key="newvalue"

// user.welcomeMessage()
// user.username="Rohan"
// user.welcomeMessage()


//Arrow functions   

// const chai ={
//     let nme:"arpit";
//     ,chaipelo:function{
//         console.log(`${this.nme}`);}
// }

// const addnum = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addnum(10,20));

// const addtwo = (num1,num2) => num1+num2;

// console.log(addtwo(10,20))

// const addtwo = () => {
//     let details={
//         username:"Arpit",id:1021,email:"arpit@gmail.com"
//     }
//     return details;
// }
// console.log(addtwo());

// let add = (a,b) => a+b;
// console.log(add(1,5));

const coding=["js","ruby","java","python"]
const value=coding.forEach((val) =>{
    console.log(val);
    return val;
});
console.log(value);

