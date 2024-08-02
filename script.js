let interval;
let timeRemaining = 60;
const alarm = document.getElementById('alarm');
const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const container = document.querySelector('.container');

function start() {
    interval = setInterval(watch, 1000);
    container.style.backgroundColor = 'green';
}
function pause() {
    clearInterval(interval);
    alarm.pause();
}
function reset() {
    clearInterval(interval);
    timeRemaining = 60;
    timer.innerText = timeRemaining;
    timer.style.color = 'black';
}

btnStart.addEventListener('click', actionButtonStart);
btnPause.addEventListener('click', actionButtonPause);
btnReset.addEventListener('click', actionButtonReset);

function actionButtonStart() {
    btnStart.style.display = 'none';
    btnPause.style.display = 'block';

}

function actionButtonPause() {
    btnReset.style.display = 'block';
    btnPause.style.display = 'none';

}

function actionButtonReset() {
    reset();
    btnStart.style.display = 'block';
    btnReset.style.display = 'none';
    container.style.backgroundColor = 'transparent';
}


function watch() {
    if (timeRemaining > 0) {
        timeRemaining--;
        timer.innerText = timeRemaining;

        if (timeRemaining === 30) {
            container.style.backgroundColor = 'orange';
        } else if (timeRemaining === 10) {
            container.style.backgroundColor = 'red';

        } else if (timeRemaining === 5) {
            alarm.play();
        }
    } else {
        clearInterval(interval);
        reset();
        container.style.backgroundColor = 'transparent';
        btnStart.style.display = 'block';
        btnPause.style.display = 'none';
    }
}

