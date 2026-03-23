// gsap.to("#box1",{x:600,duration:5,delay:0,rotate:360,backgroundColor:"gray",borderRadius:"50%",scale:0.75
// })
// gsap.from("#box1",{x:1200,duration:5,delay:1
// })
// gsap.from("#box2",{x:150,y:400,duration:10,delay:1
// })

//gsap.to - to move object from initial state to final state(Left to Right)
//gsap.from - to move object from final state to initial state(Right to Left)

//----Here y and x are like translatex and y in css


// gsap.from("h1",{opacity:0,duration:0.75,y:20,delay:1,stagger:0.75})\
//repeat:-1 means repeatition infinite times
//yoyo:1 its like an yoyo it reverse back like object moves left to right then it strts from right


// gsap.to("#box1",{x:750,rotate:360,duration:1,delay:1,repeat:-1,yoyo:1,backgroundColor:"green"})

//it  works line by line 
var t1=gsap.timeline()
// t1.to("#box1",{x:500,duration:2,rotate:360})
// t1.to("#box2",{x:500,duration:2,rotate:360})
// t1.to("#box3",{x:500,duration:2,rotate:360})
t1.from("h1",{y:-30,duration:2,delay:1})
t1.from("h3",{y:100,duration:2,delay:1,stagger:0.75,scale:0.7,yoyo:1,repeat:-1})