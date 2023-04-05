console.log("Welcome to Spotify");
// intialize the variable
let songindex= 0;
let audioElement = new Audio('song1.mp3')
let masterPlay= document.getElementById('masterPlay');
let myProgreesBar=document.getElementById('myProgreesBar');
let gif= document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'));



let songs =[
   {SongName:"Salam-e-Ishq", filePath: "song.mp3",coverPath:"image.jpg" },
   {SongName:"kesariya", filePath: "song1.mp3",coverPath:"image1.jpg" },
   {SongName:"Maan meri jaan", filePath: "song2.mp3",coverPath:"image2.jpg" },
   {SongName:"Srivali", filePath: "song3.mp3",coverPath:"image3.jpg" },
   {SongName:"Tumse pyaar karke", filePath: "song4.mp3",coverPath:"image1.jpg" },
   {SongName:"Mehabooba", filePath: "song5.mp3",coverPath:"image5.jpg" },
   
    
]
songItem.forEach((element,i) => {
   element.getElementsByTagName("img")[0].src= songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText= songs[i].SongName;
});
//audioElement.play();
// handle play / pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    }
      else{

         audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity =0;

      }
      
    
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{

   // update Seekbar
progrees= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgreesBar.value= progress;
})

myProgreesBar.addEventListener('change',()=> {
   audioElement.currentTime= ((myProgreesBar.value * audioElement.duration)/100);

})
const makeAllPlays =()=>{
Array.from(document.getElementsByClassName('songplayitem')) .forEach((element)=>{
element.classList.add('fa-play-circle');
e.target.classList.remove('fa-pause-circle')
})
}

Array.from(document.getElementsByClassName('songplayitem')) .forEach((element)=>{

   element.addEventListener('click', (e)=>{
    console.log(e.target);
    makeAllPlays();
    index= parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.remove('fa-pause-circle');

    audioElement.src='songs3.mp3'
    audioElement.currentTime=0;

    audioElement.play();






   })
})



 

 
