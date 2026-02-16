// const coding=["js","ruby","java","python"]
// const value=coding.forEach((val) =>{
//     console.log(val);
//     return val;
// });
// console.log(value);

// const myNums=[1,2,3,4,5,6,7,8,9,10]

//Filter returns the values where the forEach fonction cant provides
// in filter(num) is a keyword which we return from the function 
// you can take any of the variable

// const nums=myNums.filter((num) => {
//     if (num%2!=0 )return num;
// });
// console.log(nums);


//Simple forEach Method 
// newNums=[]
// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num);
//     }
// });
// console.log(newNums);

const books=[
{ title: 'Book One', genre: 'Fiction', publish: 1981,
edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1999,
edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 }
];



// ++++++++++++++Given condition using "filter"  if book type genre is "fiction" show details+++++++++++
//It return value according to the condition


 // const book=books.filter((bookstype)=>{
//     if (bookstype.genre=="Fiction"){
//         return bookstype;
//     }
// });

// console.log(book);

//If we have on line of logic code we directly write consition without  using return
//  without using scope { }

// let book=books.filter((bookstype) => bookstype.genre=="History"
// );
// console.log("History books:\n",book);


// book=books.filter((bookstype) =>{ return bookstype.publish>=1995 && bookstype.genre==="History"})
// console.log(book);

// const myNums=[1,2,3,4,5,6,7,8,9,10]

//+++++++++++++ MAP ++++++++++++++++
// use to update or iterate any value 
// const newNums=myNums.map((num) =>num+10);


// newNums=myNums.map()
// console.log(newNums);


//+++++++++++ REDUCE +++++++++++++++++++++++

// const myNums=[1,2,3,4]
// const myTotal=myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal);



//Destructing in javascript of objects
// let company={name:"Arpit",phone:7052,rollno:15};
// const {phone}=company;
// console.log(phone);

// console.log(Object.keys(company));
// console.log(Object.values(company));
// console.log(Object.hasOwnProperty('name'));


//Localstorage -> It is used to store data in local storage of the browser and the after the window is closed data connot be deleted

//session storage-> stores the data temporarily if tab is cllosed the data will be lose

//cookies-> it stores data in the browser property odf cookies

//how to store
//data fetch kaise kre
//  store data we use- setItem()
//  to read data we use - getData()
//to remove we use removeItem()


//cookies is used to store the small amount of data which can be reach to server automaticallyy

// localStorage.setItem("fruits","Apple");
// localStorage.setItem("name","harsh");


// localStorage.setItem("friends",JSON.stringify(["harsh","arpit","avin","atyant"]));



// thm.addEventListener("click",function(){
//     document.body.classList.toggle("theme");

//     if(document.body.classList.contains("theme")){
//     localStorage.setItem('theme','dark');
// }else{
//     localStorage.setItem('theme','light');
// }
// });
// if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark-mode');
// }



//Agar ek function ko agar aap ek aur function bhej de rahe ho parameter mein to wo parameter wala functions callback function kehlata hai
//Callback functions


// function kuchdermein(fnc){
//     setTimeout(fnc,5000);
// }
// kuchdermein(function(){
//     console.log("wellcoded");
    
// });




//Promises and Async Await



// let pr=new Promise(
//    function(res,rej){
//      setTimeout(()=>{
//         let rn=Math.floor(Math.random()*10);
//         if(rn>5){
//            res("resolved with"+rn);
//         }else{
//             rej("rejected with "+rn);
//         }
//     },5000);

//    });

//    pr.then(function(val){
//     console.log(val);
    
//    }).catch(function(){
//     console.log(val);
    
//    });


// async function abcd(){
//     try{let val=await pr;
//         console.log(val);

//     }catch(err){
//         console.log(err);
        
//     }
    
// }
// abcd();


// fetch("https://api.github.com/users/Arpit1825").then(function(data){
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// })

async function getProducts(){
    const response=await fetch("https://dummyjson.com/products");
    const data= await response.json();

    // console.log(data);
    console.log(data.products[3]);
    console.log(data.products[3].images);
let prod=document.querySelector(".image");
let img=prod.querySelector("img");
img.setAttribute("src",data.products[3].images);
    console.log(img);
}
getProducts();