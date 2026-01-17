let number1 = document.getElementById("number1");

let ramdom = Math.floor(Math.random() * 100) + 1;
number1.innerText = ramdom;

let btn = document.getElementById("b1");
btn.onclick = showInput;

let count = 0;

function showInput() {
    let inputValue = Number(document.getElementById("myInput").value);
    count++;
    
    if (inputValue > ramdom) {
        console.log("Try lower value");
    } 
    else if (inputValue < ramdom) {
        console.log("Try higher value");
    } 
    else {
        console.log("Win in " + count + " attempts 🎉");
    }
}
