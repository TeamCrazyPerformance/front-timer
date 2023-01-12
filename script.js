const SECOND_LOWER_BOUNDARY = 0;
const MINUTE_LOWER_BOUNDARY = 0;
const MINUTE_UPPER_BOUNDARY = 60;
const MINUTE = 0;
const SECOND = 0;

const secText = document.getElementById("sec");
const minText = document.getElementById("min");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const minuteButtons = document.getElementsByClassName('addTimeBtn');

var minute = 0;
var second = 0;
let timer;
var timeOutFlag = false;
var isTimeAdded = false;

function updateMinSecText(minOrSecCheck) {
    let minOrSec;
    let minOrSecText;
    switch(minOrSecCheck) {
        case MINUTE:
            minOrSec = minute;
            minOrSecText = minText;
            break;

        case SECOND:
            minOrSec = second;
            minOrSecText = secText;
            break;

        // no default
    }

    if (minOrSec < 10) {
        minOrSecText.innerText = "0" + minOrSec;
    } else {
        minOrSecText.innerText = minOrSec;
    }
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

function addTime(addingMinute) {
    isTimeAdded = true;

    minute += addingMinute;
    if (minute >= MINUTE_UPPER_BOUNDARY) {
        minute -= MINUTE_UPPER_BOUNDARY;
    }

    updateMinText();
}

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

function stop() {
    clearInterval(timer);
}

function reset() {
    stop();
    second = 0;
    minute = 0;
    updateSecText();
    updateMinText();
}

startBtn.addEventListener("click", function () {
    start();
});

stopBtn.addEventListener("click", function () {
    stop();
});

resetBtn.addEventListener("click", function () {
    reset();
});

function getTargetTime(item) {
    const targetId = item.id;
    const trimmedTargetId = targetId.substring(6);
    const targetTime = parseInt(trimmedTargetId);
    return targetTime;
}

for (let item of minuteButtons) {
    item.addEventListener("click", function() {
        addTime(getTargetTime(item));
    });
}
