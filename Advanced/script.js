// const h1=document.querySelector("h1");
// const btn=document.querySelector(".btn");

// const sayHello=()=>{
//     console.log("Script is working");
// };

// sayHello();

// h1.addEventListener('click',()=>{
//    setTimeout(()=>{
//      document.body.style.backgroundColor="pink";
//    },2000);
// });


// btn.addEventListener('click',()=>{
//     alert("Button Clicked");
// });

// const oldData={
//     username:"Arpit Verma",
//     tech:"frontend",
//     email:"av6821246@gmail.com"
// }
// const newUpdates={
//     role:"fullStack",
//     location:"kanpur"
// }

// const updatedProfile={...oldData,...newUpdates};//  Spread Operator 
// console.log(updatedProfile);

// const addNumbers=(...nums)=>{//Spread operator is used 
//     console.log(nums);
    
// }
// addNumbers(1,2,3);


// const obj={
//     a:1, add:()=>{
//         console.log(this.a);
//         console.log(this);
        

//     }
// };
// console.log(obj.add());

// function add(a,b,cd){
//     const result=a+b;
//     cd(result);

// }

// add(2,4,function(val){
//     console.log(val);
    
// })

// const students=['ajay','raj','jone'];
// students.reverse();
// console.log(students);


// students.forEach((val)=>{
//     console.log(val);
    
// })

// let songs = [
//     {songname: "FAVELA", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
//     {songname: "Fearless Funk", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
//     {songname: "Fly High", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
//     {songname: "ALL IN MY HIGH", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
//     {songname: "Where We Are", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
//     {songname: "LOFIN-scars", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
//     {songname: "Alone Tonight", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
//     {songname: "Godless-Ailow", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
//     {songname: "Hero's Ending", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
//     {songname: "Warrior-Marin Hox", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"}
// ];

// songs.forEach((val)=>{
//     console.log(val);
    
// })



// console.log(songs.filter((songs)=>songs.songname=="FAVELA"));

const nums=[1,2,3,4,5,6];

const updatedNums=nums.map((nums)=>nums+1);
console.log(updatedNums);

