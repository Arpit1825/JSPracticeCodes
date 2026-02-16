// //How to declare the variables in javascript
// const accountId=144553
// let accountEmail="av6821246@google.com"
// var accountpassword="12345"
// accountCity="Jaipur"

// accountEmail="hc@hc.com"
// Object.freeze('accountEmail')
// accountEmail="arpit@hc.com"
// // console.log(accountId);

// //accountId=2//not allowed

// // console.table([accountId,accountEmail,accountpassword,accountCity]);


// // console.log(3+3);

// // console.log("Anshul");

// //ECMA standards ,MDN //

// // let myname={}//Object is created by this way
// // let myname={name:"Arpit"}


// // let score="33abc"
// let age=18
// // let isLoggedIn=false
// let state;
// // console.log(state);

// // console.log(myname);

// // console.log(typeof score);//string
// // console.log(typeof(score));//string

// let valueInNumber=Number(score)
// // console.log( typeof valueInNumber);


// // console.log(typeof "33abc");//string 

// // Use strict and double inverted comma
// // console.log(score);



// // let isLoggedIn=""
// // let booleanisLoggedIn=Boolean(isLoggedIn)
// // console.log(booleanisLoggedIn);

// let somenumber= 33
// // let stringNumber=String(somenumber)

// // console.log(stringNumber);//33
// // console.log(typeof stringNumber);//string
// let stringNumber=Number(somenumber)
// // console.log(typeof stringNumber);

// let value=3
// let negvalue=-value
// // console.log(negvalue);

// //declaring string
// let str1="Hello"
// let str2=" Arpit"
// // console.log(str1+str2);
// let num="0"+2
// // console.log(typeof num);

// let gamecounter =100;
// // ++gamecounter;
// gamecounter++;
// console.log(gamecounter);
// 

// console.log(null === 0);
// console.log('2'===2);

//Primitive datatypes and non primitives

// const isLoggedIn=false
// const outsideTemp=null


// const id=Symbol('123')
// const anotherId=Symbol('123')
// // console.log(id===anotherId)

// const bigNumber=3455209590029093449458n;

// const heroes=["spider","batman","bangman","shaktiman"]//declaring array 

// //Object can be represented as key value pairs
// newObj={name:"Arpit",age:18}
// console.log(newObj)
// console.log(typeof heroes)


// const myfun=function(det){
//     console.log("heyy welcome");
//     console.log(det);
// }
// // myfun(40);

// let myname="Anshul";
// let Name=myname;
// Name="Arpit";
// // console.log(Name);

// let user={
//     email:"av6821246@gmail.com",upi:"user@ybl"
// }
// Object.freeze(user);
// user.email="rohan@gmail.com";
// console.log(user);



// //Backtick ` `  
// console.log(`Hello ${Name}`);//string interpulation

// const date=new Date();
// // console.log(date.toString());

// const gamename= new String('arpit-verma-com');
// console.log(gamename[0]);
// console.log(typeof gamename);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());//ARPIT-VERMA-COM

// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('p'));

// console.log(heroes.slice(0,3));//takes the value from array 
// console.log(heroes.splice(1,3));
// // console.log(heroes);

// const onestring="  arpit   "
// console.log(onestring.trim());


const score=400;
// console.log(score);


// const balance =new Number(100);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));



// const other=123.8966
// console.log(other.toPrecision(4));

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4,6));
// console.log(Math.ceil(4,2))
// console.log(Math.floor(3,9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));


// console.log(Math.random(1,10));
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);


// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toString());
// console.log(mydate.toLocaleString())

// let createdDate=new Date(2026,1,10);
// console.log(createdDate.toDateString());

// let createdDate=new Date("2026-1-10");
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

//Timestamps
// let timeStamp=Date.now();
// console.log(timeStamp);
// console.log(createdDate.getTime());

// let newdate=new Date()
// console.log(newdate.getMonth()+1);

// console.log(`${newdate.getDay()}`);//2


// newdate.toLocaleString('default',{weekday:"long"

// })

// console.log(newdate)


//+++++++++++++++++ARRAYS AND OBJECTS++++++++++++++++


let myArr=[1,2,3,4,5]
let myArr2=new Array(0,2,3,4,5)

// myarr2.push(60)
// myarr2.pop()
// console.log(arr);
// console.log(myarr2);

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.indexOf(22));



// console.log("A ",myArr)

// const myn1=myArr.slice(1,3)
// console.log(myn1);
// const myn2=myArr.splice(1,3)
// console.log(myn2);

// console.log(myArr);

const marvel_heros=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros[3][1]);

const allheros=marvel_heros.concat(dc_heroes);
// console.log(allheros);

const allHeros=[...marvel_heros,...dc_heroes]
// console.log(allHeros);

const another_arr=[1,2,3,4,5,[5,6,7],6,7,[8,2,3],4]
console.log(another_arr.flat());

console.log(Array.isArray(["Anshul"]));
console.log(Array.from("Anshul"));

const score1=2
const score2=4
const score3=6
const score4=9

console.log(Array.of(score1,score2,score3,score3,score4));










