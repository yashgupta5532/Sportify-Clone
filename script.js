let masterplay=document.getElementById("masterplay");
let progressbar=document.getElementById("progressbar");
let audioElement= new Audio ("./songs/song2.mp3");
let songitem=Array.from(document.getElementsByClassName('song-item'));
let songIndex=0;
const songsArr=[
    {songsname:"salame-ishq",filepath:"./songs/1.mp3",coverpath:"./images/spotify.png"},
    {songsname:"punjavi-song",filepath:"./songs/2.mp3",coverpath:"./images/spotify.png"},
    {songsname:"jersey song",filepath:"./songs/3.mp3",coverpath:"./images/spotify.png"},
    {songsname:"naajare teri",filepath:"./songs/4.mp3",coverpath:"./images/spotify.png"},
    {songsname:"haryanvi-song",filepath:"./songs/5.mp3",coverpath:"./images/spotify.png"},
    {songsname:"Dil Ko Kbps",filepath:"./songs/6.mp3",coverpath:"./images/spotify.png"},
    {songsname:"Dekhte Dil Kbps",filepath:"./songs/7.mp3",coverpath:"./images/spotify.png"},
    {songsname:"Terii Umeed  Kbps",filepath:"./songs/8.mp3",coverpath:"./images/spotify.png"},
    {songsname:"Sanseinn 128 Kbps",filepath:"./songs/9.mp3",coverpath:"./images/spotify.png"},
];
songitem.forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songsArr[i].coverpath;
    e.getElementsByClassName('songname')[0].innerHTML=songsArr[i].songsname;
})
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle")
        masterplay.classList.add("fa-play-circle")
    } 
})
audioElement.addEventListener('timeupdate',()=>{
    myprogressbar=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=myprogressbar;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach(e=>{
            e.classList.remove("fa-pause-circle");
            e.classList.add("fa-play-circle");
        })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach(element=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`./songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
let previous=document.getElementById('previous');
let next=document.getElementById('next');

previous.addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`./songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
next.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex +=1;
    }
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})