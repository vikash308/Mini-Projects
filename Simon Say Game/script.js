let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let color = ["red" , "yellow", "green", "blue"]

let button = document.querySelectorAll(".box");
let message = document.querySelector("#message");
let high = document.querySelector(".high")
document.addEventListener("keypress" , ()=>{
    if(start ==false)
        levelUp();
});
function reset(){
    start = false
    gameSeq=[]
    userSeq=[]
    level=0
}
function levelUp(){
    userSeq=[]
    start= true;
     level++;
     message.innerHTML = `Level : ${level}`
     generate();
}



function generate(){
    let idx = Math.floor(Math.random()*4);
    gameSeq.push(color[idx])
    console.log(gameSeq)
   let flashColor =  document.querySelector(`.${color[idx]}`);
    flash(flashColor);
}

function flash(str){
    str.classList.add("flash");
    setTimeout(()=>{
        str.classList.remove("flash")
    },250)
}


for (const btn of button) {
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    flash(this);
    check(this);
    let userColor = this.getAttribute("id")
    userSeq.push(userColor)
    console.log(userSeq)
    check();
}

function check(){
    let idx = userSeq.length-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        message.innerHTML = `Game Over! Press any key to restart.`
        show(level);
        reset()
    }
}

