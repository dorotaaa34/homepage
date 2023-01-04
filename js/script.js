{
    const welcome = () => {
        console.log ("Hello");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColour = document.querySelector(".js-nextColour");
        body.classList.toggle("dark");
    
        if (body.classList.contains("dark")) {
            nextColour.innerText = "jasny";
        } else {
            nextColour.innerText = "ciemny";
        }
    }
    
    const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
    }

    init ();

   const remove = () => {
    const dark = document.querySelector(".dark");
    const buttonTwo = document.querySelector(".buttonTwo");
    const header = document.querySelector(".header");
    
    buttonTwo.addEventListener("click", () => {
        header.remove();
    });
   }

   remove ();
   
}