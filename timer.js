const ONE_MINUTE = 60;
const THREE_MINUTE = 180;
const FIVE_MINUTE = 300;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let time = 0;
let playing = false;
let timerEventId;

startBtn.addEventListener("click", startEvent);
stopBtn.addEventListener("click", stopEvent);
document.getElementById("1min").addEventListener("click", function () {
    addTime(ONE_MINUTE);
});

document.getElementById("3min").addEventListener("click", function () {
    addTime(THREE_MINUTE);
});

document.getElementById("5min").addEventListener("click", function () {
    addTime(FIVE_MINUTE);
});

function startEvent() {
    if (playing) {
        return;
    }
    playing = true;

    timerEventId = setInterval(function () {
        if (time <= 0) {
            playing = false;
            finishTimer();
            return;
        }
        time--;
        showTimer();
    }, 1000);
}

function finishTimer() {
    const END_MESSAGE = "종료";

    clearInterval(timerEventId);
    setTimeout(function () {
        alert(END_MESSAGE)
    });
}

function showTimer() {
    let timer = document.getElementById("timer");
    let min = parseInt(time / 60);
    let sec = time % 60;

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    timer.innerText = min + ":" + sec;
}

function stopEvent() {
    playing = false;
    clearInterval(timerEventId);
}


function addTime(addTime) {
    const OVER_LIMIT_TIME_ALERT = "그만";

    if (!validateLimitTime(addTime)) {
        alert(OVER_LIMIT_TIME_ALERT);
        return;
    }
    time += addTime;
    showTimer();
}

function validateLimitTime(addTime) {
    const limitTime = 60 * 99;
    return time + addTime <= limitTime;
}