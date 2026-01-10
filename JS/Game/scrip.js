let paper = document.querySelector(".pimg")

let result = document.getElementById("result");


let user;
let random;

paper.addEventListener("click", () =>{
    user = 1;
    playgame();
}
)

let scissors = document.querySelector(".simg")

scissors.addEventListener("click", () =>{
    user = 2;
    playgame();
    
})

let roke = document.querySelector(".rimg")

roke.addEventListener("click", () =>{
    user = 3;
    playgame();
})

function playgame(){
    let random = Math.floor(Math.random() * 3)+1;
    if (user == 1 && random == 1 || user==2 && random==2 || user==3 && random==3) {
        result.innerText = "Draw" ;
        document.body.style.background = "blue";
        
    }
    else if (user == 2 && random==1 || user==3 && random==2 || user == 1 && random == 3) {
        result.innerText = "😎 Win" ;
        document.body.style.background = "green";
    }
    else if(user == 1 && random == 2 || user ==2 && random==3 || user==3 && random==1 ){
        result.innerText = " 😫 You lost";
        document.body.style.background = "Red";
    }
    else{
        result.innerText = "You lost" ;
    }
}

