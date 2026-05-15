

const text = 'Satriya.';
let index = 0;

function ketik(){

if(index < text.length){

document.getElementById('typing').innerHTML += text.charAt(index);

index++;

setTimeout(ketik,200);

}

}

ketik();
const music = new Audio("musik.mp4");
music.loop = true;

// lanjutkan posisi
if (localStorage.getItem("musicTime")) {
  music.currentTime = localStorage.getItem("musicTime");
}

// simpan posisi terus
setInterval(() => {
  localStorage.setItem("musicTime", music.currentTime);
}, 1000);

// auto play setelah interaksi pertama
function startMusic() {
  music.play();
  document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);