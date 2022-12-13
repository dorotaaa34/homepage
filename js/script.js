
console.log("Cześć!");

let przycisk = document.querySelector(".przycisk");
let mainheadline = document.querySelector(".mainheadline");

przycisk.addEventListener("click", () => {
    mainheadline.remove();
});

console.log(przycisk);

let button = document.querySelector(".button");
let photo = document.querySelector(".photo");

button.addEventListener("click", () => {
    photo.remove();
});
