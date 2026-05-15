

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

  