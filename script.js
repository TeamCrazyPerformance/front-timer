const secText = document.getElementById("sec");
const minText = document.getElementById("min");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const minute1 = document.getElementById("minute1");
const minute3 = document.getElementById("minute3");
const minute5 = document.getElementById("minute5");
const resetBtn = document.getElementById("resetBtn");

var minute = 0;
var second = 0;
let timer;
var timeOutFlag = false;

startBtn.addEventListener("click", function () {
    start();
});

function start() {
    timer = setInterval(function () {
        if (timeOutFlag) {
            timeOut();
            return;
        }

        secondPast();
        
        updateSecText();
        updateMinText();

        if (isTimeOut()) {
            timeOutFlag = true;
        }
    }, 1000);
}

stopBtn.addEventListener("click", function () {
    stop();
});

function secondPast() {
    second--;
    if (second < 0) {
        minute -= 1;
        second = 59;
    }
}

function timeOut() {
    reset();
    window.alert("시간종료!");
}

function isTimeOut() {
    return second == 0 && minute == 0;
}

function updateMinText() {
    if (minute < 10) {
        minText.innerText = "0" + minute;
    } else {
        minText.innerText = minute;
    }
}

function updateSecText() {
    if (second < 10) {
        secText.innerText = "0" + second;
    } else {
        secText.innerText = second;
    }
}

function stop() {
    clearInterval(timer);
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

function addTime(addingMinute) {
    minute += addingMinute;
    if (minute >= 60) {
        minute -= 60;
    }

    updateMinText();
}

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    stop();
    second = 0;
    minute = 0;
    secText.innerText = "00";
    minText.innerText = "00";
}