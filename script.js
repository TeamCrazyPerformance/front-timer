import Timer from './timer';

const timer = new Timer();

const secText = document.getElementById("sec");
const minText = document.getElementById("min");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const minuteButtons = document.getElementsByClassName('addTimeBtn');

function updateMinText() {
    minText.innerText = timer.getMinuteText();
}

function updateSecText() {
    secText.innerText = timer.getSecondText();
}

startBtn.addEventListener("click", function () {
    timer.start();
});

stopBtn.addEventListener("click", function () {
    timer.stop();
});

resetBtn.addEventListener("click", function () {
    timer.reset();
    updateSecText();
    updateMinText();
});

function getTargetTime(item) {
    const targetId = item.id;
    const trimmedTargetId = targetId.substring(6);
    const targetTime = parseInt(trimmedTargetId);
    return targetTime;
}

for (let item of minuteButtons) {
    item.addEventListener("click", function() {
        timer.addTime(getTargetTime(item));
        updateMinText();
    });
}
