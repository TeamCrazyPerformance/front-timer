const SECOND_LOWER_BOUNDARY = 0;
const MINUTE_LOWER_BOUNDARY = 0;
const MINUTE_UPPER_BOUNDARY = 60;

export class Timer {
    timeOutFlag = false;
    isTimeAdded = false;
    minute;
    second;
    constructor() {
        this.minute = 0;
        this.second = 0;
    }

    secondPast() {
        second--;
        if (second < SECOND_LOWER_BOUNDARY) {
            minute -= 1;
            second = 59;
        }
    }

    isTimeOut() {
        return second == SECOND_LOWER_BOUNDARY && minute == MINUTE_LOWER_BOUNDARY;
    }

    timeOut() {
        reset();
        window.alert("시간종료!");
    }

    addTime(addingMinute) {
        isTimeAdded = true;
    
        minute += addingMinute;
        if (minute >= MINUTE_UPPER_BOUNDARY) {
            minute -= MINUTE_UPPER_BOUNDARY;
        }
    }

    start() {
        interval = setInterval(function () {
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
    
    stop() {
        clearInterval(interval);
    }
    
    reset() {
        stop();
        second = 0;
        minute = 0;
    }

    getMinuteText() {
        let minText;
        if (minute < 10) {
            minText = "0" + minute;
        } else {
            minText = minute;
        }

        return minText;
    }

    getSecondText() {
        let secText;
        if (second < 10) {
            secText = "0" + second;
        } else {
            secText = second;
        }

        return secText;
    }
}