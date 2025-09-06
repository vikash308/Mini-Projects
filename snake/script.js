let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        game(userchoice)
    })
});


let usersc = document.getElementById("user");
let compsc = document.getElementById("computer");
let generate = () => {
    const option = ["snake", "water", "gun"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}

let game = (userchoice) => {
    const compchoice = generate();
    console.log(userchoice);
    console.log(compchoice);
    if (userchoice === compchoice)
        document.getElementById("result").innerHTML = "Match Draw!!";

    if (userchoice == "snake" && compchoice == "water" || userchoice == "water" && compchoice == "gun" || userchoice == "gun" && compchoice == "snake") {
        document.getElementById("result").innerHTML = "You Win!!";
        userscore++;
        usersc.innerHTML=userscore;
    }

    if (userchoice == "water" && compchoice == "snake" || userchoice == "gun" && compchoice == "water" || userchoice == "snake" && compchoice == "gun"){
        document.getElementById("result").innerHTML = "You Lose!!";
        comscore++;
        compsc.innerHTML= comscore;
    }
    document.getElementById("rec").innerHTML=`you choose : ${userchoice} <br> Computer choose : ${compchoice}`;
    document.getElementById("btn").onclick= function(){
        userscore=0;
        comscore =0;
        compsc.innerHTML=0;
        usersc.innerHTML=0;
        document.getElementById("result").innerHTML=" "
        document.getElementById("rec").innerHTML=" "
    }
}
