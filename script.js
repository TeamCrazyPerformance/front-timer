const ONE = 1;
const THREE = 3;
const FIVE = 5;
const SECOND_LOWER_BOUNDARY = 0;
const MINUTE_LOWER_BOUNDARY = 0;
const MINUTE_UPPER_BOUNDARY = 60;

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
var isTimeAdded = false;

startBtn.addEventListener("click", function () {
    start();
});

function start() {
    timer = setInterval(function () {
        if (!isTimeAdded) {
            reset();
            window.alert("추가된 시간이 없습니다!");
            return;
        }

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
    if (second < SECOND_LOWER_BOUNDARY) {
        minute -= 1;
        second = 59;
    }
}

function timeOut() {
    reset();
    window.alert("시간종료!");
}

function isTimeOut() {
    return second == SECOND_LOWER_BOUNDARY && minute == MINUTE_LOWER_BOUNDARY;
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
    addTime(ONE);
});

minute3.addEventListener("click", function () {
    addTime(THREE);
});

minute5.addEventListener("click", function () {
    addTime(FIVE);
});

function addTime(addingMinute) {
    isTimeAdded = true;
    
    minute += addingMinute;
    if (minute >= MINUTE_UPPER_BOUNDARY) {
        minute -= MINUTE_UPPER_BOUNDARY;
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