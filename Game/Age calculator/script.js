let btn = document.getElementsByClassName("btn");

let nowdate = new Date();

let text1 = document.getElementById("years");
let text2 = document.getElementById("months");
let text3 = document.getElementById("days");

function date(){
    let pd = document.getElementById("input").value;
    if(pd === ""){
        alert("Place Enter date");
    }
    let birthDate  = new Date(pd);

    console.log("birth date: ")
    console.log(birthDate .getFullYear());
    console.log(birthDate.getDate());
    console.log(birthDate.getMonth());    
   let Years = nowdate.getFullYear() - birthDate.getFullYear();
   let month = nowdate.getMonth() - birthDate.getMonth();
   let day = nowdate.getDay() - birthDate.getDay();

   if(day < 0){
    month--;
    let prevMonth = new Date(nowdate.getFullYear(),nowdate.getMonth(), 0);
    day += prevMonth.getDate();
   }
    if (month < 0) {
        Years--;
        month += 12;
    }
     console.log(Years,month,day);
     text1.innerText = Years;
     text2.innerText = month;
     text3.innerText = day;
}