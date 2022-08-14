const getById = (value) => document.getElementById(value)
const setTime = () => {
    const currentDate = new Date();
    const cd = new Date();

    getById('date').innerText = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`

    let hours = cd.getHours().toString().padStart(2,0);
    let minutes = cd.getMinutes()< 10 ? `0${cd.getMinutes()}` : cd.getMinutes();
    let seconds = cd.getSeconds().toString().padStart(2,0);

    getById('time').innerText = `${hours} : ${minutes} : ${seconds}`
}
setInterval(setTime, 1000)

// stopwatch

const stopwatchCounter = () => {
    const stopwatchTime = getById('stopwatchTime').innerText;

    let [hours,minutes,seconds,milliseconds] = stopwatchTime.split(':').map(Number);

    // console.log([hours,minutes,seconds,milliseconds])
    milliseconds+=10;
    if(milliseconds >= 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }


    getById('stopwatchTime').innerText = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${milliseconds.toString().padStart(3,0)}`
}

let startStopwatchID
const startStopwatch = () => {
    startStopwatchID = setInterval(stopwatchCounter, 10);
}

const stopStopwatch = () => {
    clearInterval(startStopwatchID)
}

const resetStopwatch = () => {
    getById('stopwatchTime').innerText = '00:00:00:000';
    getById('loopItem').innerText = " ";
}

const loopStopwatch = () => {
    getById('loopItem').innerText += `\n${getById('stopwatchTime').innerText}`
}

// timer

const minutesPlus = () => {
    getById('timerSet').innerText++
}
const minutesMinus = () => {
    getById('timerSet').innerText--
    if (getById('timerSet').innerText < 0 ){
        getById('timerSet').innerText = "0"
    }

}

let startTimerID
const startTimerCountdown = () => {
    timerTime = getById('timerTime').innerText;

    let [minutes,seconds] = timerTime.split(':').map(Number);

    if (minutes == 0 && seconds == 0) {
        clearInterval(startTimerID)
        return
    };
    
    if (seconds == 0){
        seconds = 60;
        minutes--;
    }
    seconds--;
    
    getById('timerTime').innerText = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}` 
    }
    
const startTimer = () => {
    if (getById('timerTime').innerText == "00:00") {
        getById('timerTime').innerText = `${getById('timerSet').innerText.padStart(2,0)}:00`;
    }
    else {
        getById('timerTime').innerText = `${getById('timerTime').innerText}`;
    }
    
    startTimerID = setInterval(startTimerCountdown, 1000);
}

const stopTimer = () => {
    clearInterval(startTimerID);

}

const resetTimer = () => {
    getById('timerTime').innerText = '00:00';
}
