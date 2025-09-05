const startTimer = document.querySelector("#start-btn");
const resetTimer = document.querySelector("#reset-btn");

const focusBtn = document.querySelector("#focus-btn");
const shortBtn = document.querySelector("#short-break-btn");
const longBtn = document.querySelector("#long-break-btn");

const setTime = document.querySelector("#time");

const focusTime = 1500;
const shortTime = 300;
const longTime = 900;

let currentTime = focusTime;

const alarmSound = new Audio('assets/alert.mp3');

focusBtn.addEventListener("click", ()=>{
    longBtn.classList.remove("active");
    shortBtn.classList.remove("active");
    focusBtn.classList.add("active");
    setTime.innerText = "25:00";
    currentTime = focusTime;
})

shortBtn.addEventListener("click", ()=>{
    focusBtn.classList.remove("active");
    longBtn.classList.remove("active");
    shortBtn.classList.add("active");
    setTime.innerText = "05:00";
    currentTime = shortTime;
})

longBtn.addEventListener("click", ()=>{
    shortBtn.classList.remove("active");
    focusBtn.classList.remove("active");
    longBtn.classList.add("active");
    setTime.innerText = "15:00";
    currentTime = longTime;
})

function updateTimer() {
    let minutes = Math.floor(currentTime/60);
    let seconds = currentTime%60;

    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    setTime.innerHTML = formattedTime;
}
function resetInterval() {
    clearInterval(timerInterval);
    currentTime = focusTime;
    setTime.innerText = "25:00";
}
startTimer.addEventListener("click", ()=>{
    timerInterval = setInterval(()=>{
        currentTime--;
        updateTimer();
        if(currentTime===0){
            alarmSound.play();
            alert("Time's Up");
            resetInterval();
        }
    },1000)
})

resetTimer.addEventListener("click",()=>{
    longBtn.classList.remove("active");
    shortBtn.classList.remove("active");
    focusBtn.classList.add("active");

    resetInterval();

    
})

