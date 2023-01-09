const END_MESSAGE = "종료";
const OVER_LIMIT_TIME_ALERT = "그만";
const LIMIT_TIME = 60 * 99;
const ONE_MINUTE = 60;
const THREE_MINUTE = 180;
const FIVE_MINUTE = 300;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let timer = document.getElementById("timer");
let time = 0;
let playing = false;

function showTimer() {
    min = parseInt(time / 60);
    if (min < 10) {
        min = "0" + min;
    }
    sec = time % 60;
    if (sec < 10) {
        sec = "0" + sec;
    }
    timer.innerText = min + ":" + sec;
}

startBtn.addEventListener("click", function() {
    if (playing) {
        return;
    }
    playing = true;

    startId = setInterval(function () {
        if (time <= 0) {
            playing = false;
            clearInterval(startId);
            setTimeout(function () {
                alert(END_MESSAGE)
            });
            return;
        }
        time--;
        showTimer();
    }, 1000);
})

stopBtn.addEventListener("click", function () {
    playing = false;
    clearInterval(startId);
})

function addTime(addTime) {
    if (!validateTime(addTime)) {
        alert(OVER_LIMIT_TIME_ALERT);
        return;
    }
    time += addTime;
    showTimer();
}

function validateTime(addTime) {
    if (time + addTime > LIMIT_TIME) {
        return false;
    }
    return true;
}

document.getElementById("1min").addEventListener("click", function() {
    addTime(ONE_MINUTE);
})

document.getElementById("3min").addEventListener("click", function() {
    addTime(THREE_MINUTE);
})

document.getElementById("5min").addEventListener("click", function() {
    addTime(FIVE_MINUTE);
})