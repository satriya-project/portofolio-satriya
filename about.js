

    /* BACKGROUND BUBBLE */

    const bg = document.getElementById("bg");

    for (let i = 0; i < 25; i++) {

      let bubble = document.createElement("div");
      bubble.classList.add("bubble");

      let size = Math.random() * 60;

      bubble.style.width = size + "px";
      bubble.style.height = size + "px";

      bubble.style.left = Math.random() * 100 + "%";

      bubble.style.animationDuration =
        (Math.random() * 10 + 5) + "s";

      bubble.style.animationDelay =
        Math.random() * 5 + "s";

      bg.appendChild(bubble);
    }

    /* ANIMASI SCROLL */

    const hidden = document.querySelectorAll(".hidden");

    window.addEventListener("scroll", showItems);

    function showItems() {

      hidden.forEach(item => {

        const top =
          item.getBoundingClientRect().top;

        const visible =
          window.innerHeight - 100;

        if (top < visible) {
          item.classList.add("show");
        }

      });

    }

    showItems();







    function continueMusic() {
  const music = document.getElementById("backgroundMusic");

  if (!music) return;

  const isMusicPlaying =
    localStorage.getItem("musicPlaying") === "true";

  const musicCurrentTime =
    localStorage.getItem("musicCurrentTime") || 0;

  if (isMusicPlaying) {
    music.currentTime = parseFloat(musicCurrentTime);

    music.play().catch((error) => {
      console.log("Music playback failed", error);
    });
  }

  document.addEventListener(
    "touchstart",
    startMusic,
    { once: true }
  );

  document.addEventListener(
    "click",
    startMusic,
    { once: true }
  );

  function startMusic() {
    music.play().catch((error) => {
      console.log("Autoplay prevented", error);
    });
  }

  music.addEventListener("timeupdate", () => {
    localStorage.setItem(
      "musicCurrentTime",
      music.currentTime
    );
  });

  music.addEventListener("play", () => {
    localStorage.setItem("musicPlaying", "true");
  });

  music.addEventListener("pause", () => {
    localStorage.setItem("musicPlaying", "false");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
  continueMusic();
});
  









document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("backgroundMusic");

  if (!music) return;

  // ambil status dari halaman sebelumnya
  const isPlaying = localStorage.getItem("musicPlaying") === "true";
  const time = localStorage.getItem("musicTime") || 0;

  music.currentTime = parseFloat(time);

  if (isPlaying) {
    music.play().catch(() => {});
  }

  // simpan posisi terus
  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 1000);

  music.addEventListener("play", () => {
    localStorage.setItem("musicPlaying", "true");
  });

  music.addEventListener("pause", () => {
    localStorage.setItem("musicPlaying", "false");
  });

  // INI KUNCI UTAMA (klik sekali saja di mana saja)
  document.addEventListener("click", function startMusic() {
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
  });
});
