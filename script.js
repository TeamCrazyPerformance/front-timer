//const 예시 = document.getElementById("sec")



window.onload = function() {
    const dosec = document.getElementById("sec");
    const domin = document.getElementById("min");

    let timer_sec;
    let timer = 0;

    //click start button
    document.getElementById("start").addEventListener("click", function() {

        if (timer > 0) {
            return;
        }
        var sec = parseInt(dosec.innerText);
        var min = parseInt(domin.innerText);

        //start seconds

        timer_sec = setInterval(function() {
            if (sec == 0 && min == 0) {
                clearInterval(timer_sec);

                setTimeout(function() {
                    alert('시간을 설정해 주세요!');
                }, 1000);
            }

            if (sec < 0) {
                min -= 1;
                sec = 59;
            } else if (sec == 60) {
                sec = "00";
            } else if (sec < 10) {
                sec = "0" + sec;
            }
            dosec.innerText = sec;

            if (min < 10) {
                domin.innerText = "0" + min;
            } else {
                domin.innerText = min;
            }

            sec--;
        }, 1000);


        timer++;

        //click stop button
        document.getElementById("stop").addEventListener("click", function() {
            stop();
        });


    });

    function stop() {
        clearInterval(timer_sec);
        timer--;
        if (timer < 0)
            timer = 0;
    }

    //click minuteplus button
    document.getElementById("minute1").addEventListener("click", function() {
        minuteplus(1);
    });

    //click minuteplus3 button
    document.getElementById("minute3").addEventListener("click", function() {
        minuteplus(3);
    });

    //click minuteplus3 button
    document.getElementById("minute5").addEventListener("click", function() {
        minuteplus(5);
    });

    function minuteplus(minute) {
        var min = parseInt(domin.innerText);

        min = min + minute;
        if (min < 10) {
            min = "0" + min;

        }
        domin.innerText = min;

        //click reset button
        document.getElementById("reset").addEventListener("click", function() {
            reset();
        });

        function reset() {
            stop();
            dosec.innerText = "00";
            domin.innerText = "00";
        }

    }
}