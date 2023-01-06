const secText = document.getElementById("sec");
const minText = document.getElementById("min");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const minute1 = document.getElementById("minute1");
const minute3 = document.getElementById("minute3");
const minute5 = document.getElementById("minute5");
const resetBtn = document.getElementById("resetBtn");

let timer_sec;
let timer_min;
let timer = 0;

//click start button
startBtn.addEventListener("click", function () {
    start();
});

function start() {
    if (timer > 0) {
        return;
    }

    var sec = parseInt(secText.innerText);
    var min = parseInt(minText.innerText);

    timer_sec = setInterval(function () {
        sec--;
        if (sec < 0) {
            min -= 1;
            sec = 59;
        } else if (sec == 60) {
            sec = "00";
        } else if (sec < 10) {
            sec = "0" + sec;
        }
        secText.innerText = sec;
        if (min < 1) {

            minText.innerText = "0" + min;
        } else {
            minText.innerText = min;
        }

        if (sec == 0 && min == 0) {
            clearInterval(timer_sec);
            clearInterval(timer_min);
            window.alert("시간종료!");
        }

    }, 1000);

    timer++;
}

stopBtn.addEventListener("click", function () {
    stop();
});

function stop() {

    clearInterval(timer_sec);
    clearInterval(timer_min);


    timer--;
    if (timer < 0)
        timer = 0;
}

minute1.addEventListener("click", function () {
    addTime(1);
});

minute3.addEventListener("click", function () {
    addTime(3);
});

minute5.addEventListener("click", function () {
    addTime(5);
});

function addTime(minute) {
    var min = parseInt(minText.innerText);
    min += minute;
    if (min == 60) {
        min = 0;
    } else if (min < 10) {
        min = "0" + min;
    }
    minText.innerText = min;
}

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    stop();
    secText.innerText = "00";
    minText.innerText = "00";
}