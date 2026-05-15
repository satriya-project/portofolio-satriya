
// =========================
// TYPING LOOP EFFECT
// =========================

const text = "hasil codingan";

const typing =
document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typingLoop(){

    if(!isDeleting){

        typing.textContent =
        text.substring(0,index);

        index++;

        if(index > text.length){

            isDeleting = true;

            setTimeout(typingLoop,1000);
            return;
        }

    }else{

        typing.textContent =
        text.substring(0,index);

        index--;

        if(index < 0){

            isDeleting = false;
            index = 0;
        }

    }

    setTimeout(
        typingLoop,
        isDeleting ? 80 : 150
    );

}

typingLoop();


// =========================
// SCROLL REVEAL
// =========================

const hiddenElements =
document.querySelectorAll('.hidden');

window.addEventListener('scroll', ()=>{

    hiddenElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add('show');

        }

    });

});