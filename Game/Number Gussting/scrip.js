let ramdom = Math.floor(Math.random() * 100) + 1;

let btn = document.getElementById("b1");
let text = document.getElementById("text");
let c = document.getElementById("count");
let reset = document.getElementById("b2");

let count = 0;

console.log("Ramdom number is:", ramdom);

btn.onclick = userinput;

function userinput() {
    let user = Number(document.getElementById("user").value);
    count++;

    if (user > ramdom) {
        text.innerText = "High value Try Low value 👇";
        console.log("low");
    }
    else if (user < ramdom) {
        text.innerText = "Low value Try High value 👆";
        console.log("high");
    }
    else {
        text.innerText = "you are win 😎";
        console.log("win");
        btn.disabled = true;
    }

    document.getElementById("user").value = "";
    c.innerText = count;
}

reset.addEventListener("click", () => {
    location.reload();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        userinput();
    }
});
