// setInterval, setTimeout, clearInterval 함수에 관한 영상:
// https://www.youtube.com/watch?v=nwk_aNbFEEc

// Set initial count
var second = 0;

// select value and buttons
const value = document.querySelector('.time');
const btns = document.querySelectorAll(".btn");

let timeString;

function viewText() {

    if (second == 0) timeString = "00:00";
    if (second%60 < 10) {
        if (second < 600) {
            timeString = "0" + String(parseInt(second/60)) + ":" + "0" + String(parseInt(second%60));
        } else {
            timeString = String(parseInt(second/60)) + ":" + "0" + String(parseInt(second%60));
        }
    } else {
        if (second < 600) {
            timeString = "0" + String(parseInt(second/60)) + ":" + String(parseInt(second%60));
        } else {
            timeString = String(parseInt(second/60)) + ":" + String(parseInt(second%60));
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
  
    interId = setInterval(function(){
        second--; 
        console.log('second', second);
        viewText(); 
        
        if (second <= 0) {
            viewText();
            clearInterval(interId); 

            setTimeout(function() {
                alert('종료!');
            }, 1000);
        }
    }, 1000);

})


const buttonStop = document.querySelector('#end');

buttonStop.addEventListener('click', function() {
    clearInterval(interId);
    viewText(); 
})

const buttonReset = document.querySelector('#reset');

buttonReset.addEventListener('click', function() {
    clearInterval(interId); 
    second = 0;
    viewText(); 
})




