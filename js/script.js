
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let EUR = 4.52;
let GBP = 5.43;

formElement.addEventListener("submit",(event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "GBP":
            result = amount * GBP;
            break;    
    }

    resultElement.innerText = result.toFixed(2);
});