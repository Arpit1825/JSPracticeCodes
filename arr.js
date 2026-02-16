//array 

const myArr=[0,1,2,3,4,5]
const mystr=['A','B','C']

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2);

// console.log(myArr2[1]);

// some array  operations 
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);//output-[0,1,2,3,4,5,6,7]
// myArr.pop()
// console.log(myArr);//output-[0,1,2,3,4,5,6]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr=myArr.join()
// console.log(myArr); //Output-[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);//Output0,1,2,3,4,5



//slice,splice

// console.log("A",myArr);

const myn1=myArr.slice(1,3)

//  console.log(myn1);

// console.log("B",myArr);

const myn2=myArr.splice(1,3)//Changes the array after slicing 
// myArr becomes [0,4,5] splice elements gets out
// console.log("C",myArr);
// console.log(myn2);


const heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","batman","flash"]

// heros.push(dc_heros)

// console.log(heros);
// console.log(heros[3][1]);


// const allHeros=heros.concat(dc_heros)
// console.log(allHeros);

// We can flat an array consisting of many arrays

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat(Infinity)
// console.log(real_another_arr)

console.log(Array.isArray("Hitesh"));//False
console.log(Array.isArray(["Hitesh"]));//True
console.log(Array.from({name:"Hitesh"}));//interesting output-[]


