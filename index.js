const text = "Satriya";
let index = 0;

function ketik() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(ketik, 200);
  }
}

// jalankan saat halaman selesai load
window.onload = function () {
  ketik();
};