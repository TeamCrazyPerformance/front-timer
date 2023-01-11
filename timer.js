// setInterval, setTimeout, clearInterval 함수에 관한 영상:
// https://www.youtube.com/watch?v=nwk_aNbFEEc

// Set initial count
let second = 0;

// let, var, const 의 차이점: 
// https://velog.io/@bathingape/JavaScript-var-let-const-차이점

// select value and buttons
const value = document.querySelector('.clock-text');
const btns = document.querySelectorAll(".btn");

let timeString;

function viewText() {

    if (second == "0") timeString = "00:00";  // 강타입과 약타입 https://ahnheejong.name/articles/types-basic-concepts/
                                              // == 과 === 의 차이점 https://velog.io/@filoscoder/-와-의-차이-oak1091tes
    if (second%60 < 10) {
        if (second < 600) {
            timeString = "0" + parseInt(second/60) + ":" + "0" + parseInt(second%60);  // 왜 String(parseInt(second/60)) 으로 하지 않아도 될까?
        } else {
            timeString = parseInt(second/60) + ":" + "0" + parseInt(second%60);
        }
    } else {
        if (second < 600) {
            timeString = "0" + parseInt(second/60) + ":" + parseInt(second%60);
        } else {
            timeString = parseInt(second/60) + ":" + parseInt(second%60);  
        }
    }
    value.textContent = timeString;
}

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains("one")) {
            second += 60;
        } else if (styles.contains("three")) {
            second += 180;
        } else {
            second += 300;
        }

        viewText(); 
        
    })
})

const buttonStart = document.querySelector('#start')


let interId; 


buttonStart.addEventListener('click', function() {
    this.setAttribute("disabled", true);

    interId = setInterval(function(){
        console.log('second', second);
        second--;
        viewText(); 
        
        if (second <= 0) { 
            viewText();
            clearInterval(interId);  
            setTimeout(function() {
                alert('종료!');
            }, 1000);
            this.removeAttribute("disabled");
        }
    }, 1000);

})


const buttonStop = document.querySelector('#end');

buttonStop.addEventListener('click', function() {
    buttonStart.removeAttribute("disabled"); 
    clearInterval(interId);
    viewText(); 
})

const buttonReset = document.querySelector('#reset');

buttonReset.addEventListener('click', function() {
    buttonStart.removeAttribute("disabled");     
    clearInterval(interId); 
    second = 0;
    viewText(); 
})




