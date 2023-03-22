const navBurger = document.querySelector(".burger");
const navTexts = document.querySelector(".nav-texts");

const modalWrapper = document.querySelector(".modal-wrapper");
const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
/*nav button*/
function navTextToggle () {
    navTexts.classList.toggle("active-nav-texts")
}

navBurger.addEventListener("click", navTextToggle);

/*modal*/
function modalToggle () {
    modalWrapper.classList.toggle("active")
}
window.addEventListener('click', (e) => {
    if(e.target == document.querySelector(".modal-wrapper")) {
        modalToggle();
    }
})
openButton.addEventListener("click", modalToggle);
closeButton.addEventListener("click", modalToggle);