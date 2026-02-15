let display = document.querySelector(".display2");

document.addEventListener("keydown", (event) => {

    // numbers 0–9
    if (event.key >= "0" && event.key <= "9") {
        display.innerText += event.key;
    }

    // operators
    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        display.innerText += event.key;
    }

    // clear (Backspace)
    if (event.key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1);
    }

    // Enter = calculate
    if (event.key === "Enter") {
        calculate();
    }

    if(event.key === "a"){
        location.reload();
    }
});

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

