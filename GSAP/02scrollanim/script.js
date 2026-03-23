gsap.registerPlugin(ScrollTrigger);
// gsap.from("#page1 #box1",{
//     scale:0,duration:5,rotate:360
// })

// gsap.from("#page2 h1",{
//     scale:0,duration:2,rotate:360,scrollTrigger:{
//         trigger:"#page2 h1",
//         markers:true,
//         start:"top 90%",
//         end:"top 80%",
//         scroller:"body",
//         scrub:5,repeat:-1,yoyo:1
//      }
// })

gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
   scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true
        ,start:"top 0%",
        end:"top -150%",scrub:5
        ,pin:true
    }
})