// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
   //    console.log(e);
   //    console.log(e.type);
   //    console.log("Hello world");
   // let a = 25;
   //    let b = 25;
   //    console.log("Sum is: ",(a+b))
   // };
   // let btn2 = document.querySelector("#btn2");
   
   // btn2.ondblclick= () => {
      //    console.log("Button click 2 Time");
      // };
      
      // let div = document.querySelector("div");
      
      // div.onmouseover = () => {
         //    console.log("My Name is Asad");
         // }
         
         
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//    console.log("Button is Click!");
// })
// btn1.addEventListener("click", () => {
//    console.log("My Name is Asad");
// })

let mode = document.querySelector("#mode");

let cmode = "ligth";

mode.addEventListener("click", () => {
   if(cmode === "light"){
      cmode = "drak";
      document.querySelector("body").style.backgroundColor = "black";
   }
   else{
      cmode = "light";
      document.querySelector("body").style.backgroundColor = "white";
   }
})