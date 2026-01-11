let winSound = document.querySelector("#winsound");

let paper = document.querySelector(".pimg")

let result = document.getElementById("result");



document.body.style.transition = "0.2s";

let winScore = 0;
let lostScore = 0;
let drawScore = 0;

let winText = document.getElementById("win");
let lostText = document.getElementById("lost");
let drawText = document.getElementById("draw");




let user;
let random;

paper.addEventListener("click", () =>{
    user = 1;
    playgame();
    
}
)
document.addEventListener("keydown", () => {
    if (event.key === "1") {  
        user = 1;
        playgame();
    }
});


let scissors = document.querySelector(".simg")

scissors.addEventListener("click", () =>{
    user = 2;
    playgame();
    
})
document.addEventListener("keydown", () => {
    if (event.key === "2") {  
        user = 2;
        playgame();
    }
});

let roke = document.querySelector(".rimg")

roke.addEventListener("click", () =>{
    user = 3;
    playgame();
})
document.addEventListener("keydown", () => {
    if (event.key === "3") {  
        user = 3;
        playgame();
    }
});

function playgame(){
    let random = Math.floor(Math.random() * 3)+1;
    if (user == 1 && random == 1 || user==2 && random==2 || user==3 && random==3) {
        result.innerText = "Draw" ;
        document.body.style.background = "blue";
        drawScore++;
        drawText.innerText = drawScore;
        
        
    }
    else if (user == 2 && random==1 || user==3 && random==2 || user == 1 && random == 3) {
        result.innerText = "😎 Win" ;
        document.body.style.background = "green";
        let win = document.querySelector(".box2");
        win.style.backgroundImage = "url(./win.jpg)";
        win.style.backgroundSize = "cover";
        winScore++;
        winText.innerText = winScore;
        winSound.currentTime = 0;
        winSound.play();

        
    }
    else if(user == 1 && random == 2 || user ==2 && random==3 || user==3 && random==1 ){
        result.innerText = " 😫 You lost";
        document.body.style.background = "Red";
        let lost = document.querySelector(".box2");
        lost.style.backgroundImage = "url(./lost.jpg)";
        lost.style.backgroundSize = "cover";
        lostScore++;
        lostText.innerText = lostScore;

    }
    else{
        result.innerText = "You lost" ;
    }
}


let load = document.querySelector("#b1");

load.addEventListener("click",()=>{
    location.reload();
})
document.addEventListener("keydown",(event)=>{
    if(event.key==="0"){
        location.reload();
    }
})



