let timer_sec;
let timer_min;

let timer = 0;

//click start button
document.getElementById("startBtn").addEventListener("click", function () {
    start();
});

function start() {
    //console.log(timer);
    if (timer > 0) {
        return;
    }

    var sec = parseInt(document.getElementById("sec").innerText);
    var min = parseInt(document.getElementById("min").innerText);

    //start seconds
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
        document.getElementById("sec").innerText = sec;
        if (min < 1) {

            document.getElementById("min").innerText = "0" + min;
        } else {
            document.getElementById("min").innerText = min;
        }

        if (sec == 0 && min == 0) {
            clearInterval(timer_sec);
            clearInterval(timer_min);
            window.alert("시간종료!");
        }

    }, 1000);

    timer++;
}

document.getElementById("stopBtn").addEventListener("click", function () {
    stop();
});

function stop() {

    clearInterval(timer_sec);
    clearInterval(timer_min);


    timer--;
    if (timer < 0)
        timer = 0;
}

document.getElementById("minute1").addEventListener("click", function () {
    addTime(1);
});

document.getElementById("minute3").addEventListener("click", function () {
    addTime(3);
});

document.getElementById("minute5").addEventListener("click", function () {
    addTime(5);
});

function addTime(minute) {
    var min = parseInt(document.getElementById("min").innerText);
    min += minute;
    if (min == 60) {
        min = 0;
    } else if (min < 10) {
        min = "0" + min;
    }
    document.getElementById("min").innerText = min;
}

document.getElementById("resetBtn").addEventListener("click", function () {
    reset();
});

function reset() {
    stop();
    document.getElementById("sec").innerText = "00";
    document.getElementById("min").innerText = "00";
}