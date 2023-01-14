const Timer = document.getElementById('Timer');
let time = 0; //0.1초 단위로 시간 설정
let min = "";
let sec = "";
let flag = false; //시작/정지 버튼으로 인해 바뀌는 flag
let x = setInterval(function () {
    min = parseInt(time / 600);
    sec = parseInt((time / 10) % 60);
    if (flag) { //flag=true: 시작이 눌러진 상태이면
        time--; //time 0.1초 감소
    }
    if (min < 10) { //분(min)이 한 자리 수이면 앞에 0 추가
        min = "0" + min;
    }
    if (sec < 10) {//초(sec)가 한 자리 수이면 앞에 0 추가
        sec = "0" + sec;
    }
    document.getElementById("Timer").innerHTML = min + ":" + sec;
    if (time < 0) { //시간이 다 되면 time을 초기 값인 0분으로 초기화하고 타이머를 정지상태로 만들고
        time = 0;
        flag = false;
        alert('종료') // 사용자에게 종료메시지 전송
    }
}, 100);