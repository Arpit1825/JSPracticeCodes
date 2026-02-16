// If you perform anything on the browser events gets raise

//browser me koi bhi harkat kro event raise hojayega

//any action occur is said as event


//performing some Events
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     p.style.color="green";
// });
// function dblclick(){
//     p.style.color="red";
// }
// p.addEventListener("dblclick",dblclick);

// //to remove an event listener
// p.removeEventListener("dblclick",dblclick);

//After clicking on p the content will be changed
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     p.textContent="hello heyy welcome";
// });

//to print or access what data is input
// let inp=document.querySelector("input");
// inp.addEventListener("input",function(data){
//         console.log(data);

// });

//it prints every single value in console which is input from user
// let inp=document.querySelector("input");
// inp.addEventListener("input",function(dets){
//     if(dets.data !==null){
//         console.log(dets.data);
//     }
// });

// It changes the h1 heading if selcted to Device Selected
//If it is in default then it comes to the original h1 heading
// let device=document.querySelector("#device");
// let sel= document.querySelector("select");
// sel.addEventListener("change",function(det){
//     console.log(det.target.value);
//     if(det.target.value!="Choose your device"){
//     device.textContent="Device Selected"
//     }else{
//          device.textContent="Choose Option"
//     }
// });

//It changes h1 according to the device slected
// let device=document.querySelector("#device");
// let sel= document.querySelector("select");
// sel.addEventListener("change",function(det){
//     console.log(det.target.value);
//     // if(det.target.value!="Choose your device"){
//     device.textContent=`${det.target.value} Device Selected`;//It shows DeviceName Device Selected
//     device.textContent=det.target.value;//changes or show as Device name in h1
//     // }else{
//     //      device.textContent="Choose Option"
//     // }
// });

// let h3=document.querySelector("h3");
// window.addEventListener("keydown",function(dets){
//     if(dets.key==" "){
//         h3.textContent="SPC";
//     }else{
//         h3.textContent=dets.key;
//     }
// });

// let btn=document.querySelector("#btn");
// let inpu=document.querySelector("#inp");
// btn.addEventListener("click",function(){
//     inpu.click();
// });
// inpu.addEventListener("change",function(detail){
//     const file=detail.target.files[0];
//     if(file){
//         btn.textContent=file.name;
//     }
// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main=document.querySelector("#main");
// form.addEventListener("submit", function (det) {
//     det.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src",inputs[0].value);
//     let h3=document.createElement("h3");
//     h3.textContent=inputs[1].value;
//     let h5=document.createElement("h5");
//     h5.textContent=inputs[2].value;
//     let p=document.createElement("p");
//     p.textContent=inputs[3].value;
//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);
//     main.append(card);

//     inputs.forEach(function(inp){
//         if(inp.type!=="submit"){
//             inp.value="";
//         }
//     });

// });

//It work like if you want to hover any div or card background using events "mouseover" "mouseout"
// let abss=document.querySelector("#abss");
// abss.addEventListener("mouseover",function(){
//     abss.style.backgroundColor="yellow";
// });
// abss.addEventListener("mouseout",function(){
//     abss.style.backgroundColor="red";
// });


//how to move div in whole  window with your mouse
//this logic can be used to provide animation in the mouse where you move
// let abss=document.querySelector("#abss");
// window.addEventListener("mousemove",function(det){
//     abss.style.top=det.clientY+"px";
//     abss.style.left=det.clientX+"px";
// });



// jab bhi aap click krte ho ya koi bhi event raise krte ho to
// aapka jo event flow do phases mein chalta hai:

// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega

// aur pahle phase 1 hoti hai

let click=document.querySelector(".lnk1");
console.log(click);