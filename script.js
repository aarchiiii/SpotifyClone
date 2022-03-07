console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('ss/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let ss = [
    {songName: "Tu Meri - Bang Bang", filePath: "ss/1.mp3", coverPath: "c/1.jpg"},
    {songName: "Subha hone na de - Desi Boyz", filePath: "ss/2.mp3", coverPath: "c/2.jpg"},
    {songName: "Tum hi ho Bandhu - Cocktail", filePath: "ss/3.mp3", coverPath: "c/3.jpg"},
    {songName: "Twist - Love Aaj Kal", filePath: "ss/4.mp3", coverPath: "c/4.jpg"},
    {songName: "Lat Lag Gayee - Race 2", filePath: "ss/5.mp3", coverPath: "c/5.jpg"},
    {songName: "Nashe Si Chadh Gayi - Befikre", filePath: "ss/6.mp3", coverPath: "c/6.jpg"},
    {songName: "Kar Gayi Chull - Kapoor & Sons", filePath: "ss/7.mp3", coverPath: "c/7.jpg"},
    {songName: "Balam Pichkari - Yeh Jawaani Hai Deewani", filePath: "ss/8.mp3", coverPath: "c/8.jpg"},
    {songName: "Where's the Party Tonight", filePath: "ss/9.mp3", coverPath: "c/9.jpg"},
    {songName: "Chaar Bottle Vodka - Yo Yo Honey Singh", filePath: "ss/10.mp3", coverPath: "c/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = ss[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = ss[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `ss/${songIndex+1}.mp3`;
        masterSongName.innerText = ss[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `ss/${songIndex+1}.mp3`;
    masterSongName.innerText = ss[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `ss/${songIndex+1}.mp3`;
    masterSongName.innerText = ss[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})