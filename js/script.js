

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let dark = document.querySelector(".dark");
let nextColour = document.querySelector(".js-nextColour");


changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        nextColour.innerText = "jasny";
    } else {
        nextColour.innerText = "ciemny";
    }
});

let buttonTwo = document.querySelector(".buttonTwo");
let header = document.querySelector(".header");

buttonTwo.addEventListener("click", () => {
    header.remove();
});