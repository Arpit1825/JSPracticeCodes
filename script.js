console.log("Hello Arpit!");

// Declaring objects in an array object{}
songs=[{songname:"Afsos",filepath:"1.mp3",coverpath:"afsos.jpg"},
    {songname:"Millionaire",filepath:"2.mp3",coverpath:"million.jpg"},
{songname:"Thodi si Daru",filepath:"3.path",coverpath:"thodisidaru.jpg"}]

songs[0].songname="Afsos"
Object.freeze(songs[0]);
songs[0].songname="Dare"
console.log(songs[0]);
