// //Timers and Intervals 13 february 
// let count=10;
// let tm=setInterval(function(){
   
//    if(count>=1){
//     console.log(count);
//     count--;
//     }
//     else{
//         clearInterval(tm);
//     }
// },1000);//It works on for one time

let body=document.querySelector("body");
let thm=document.querySelector("button");

// if (localStorage.getItem('theme') === 'dark') {
//     let thm=document.body.classList.add('theme');


thm.addEventListener("click",function(){
    document.body.classList.toggle("theme");

    if(document.body.classList.contains("theme")){
    localStorage.setItem('theme','dark');
}else{
    localStorage.setItem('theme','light');
}
});
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// let pr=new Promise(
//    function(res,rej){
//      setTimeout(()=>{
//         let rn=Math.floor(Math.random()*10);
//         if(rn>5){
//            res("resolved with "+rn);
//         }else{
//             rej("rejected with "+rn);
//         }
//     },2000);

//    });

//    pr.then(function(val){
//     console.log(val);
    
//    }).catch(function(val){
//     console.log(val);
    
//    });

fetch("https://api.github.com/users/Arpit1825").then(function(data){
    return data.json();
}).then((dat)=> console.log(dat.login))
.catch((err)=>console.log(err))