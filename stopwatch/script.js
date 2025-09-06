const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

let [s, m, h] = [0, 0, 0]
let intereval = null;



function updatetime() {
    let ss, mm, hh;
    ss = s < 10 ? "0" + s : s;
    mm = m < 10 ? "0" + m : m;
    hh = h < 10 ? "0" + h : h;
    display.innerText = `${hh}:${mm}:${ss}`;
}

function timeStart() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }
    updatetime();
}





start.addEventListener("click", () => {
    if (intereval) clearInterval(intereval);
    intereval = setInterval(timeStart, 1000)
});


stop.addEventListener("click", () => {
    clearInterval(intereval);
});

reset.addEventListener("click", () => {
     [s, m, h] = [0, 0, 0]
     display.innerText = `00:00:00`
     clearInterval(intereval)
     intereval = null;
})