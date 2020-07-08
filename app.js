var min = 0;
var sec = 0;
var msec = 0;
start = document.getElementById("start"),
    reset = document.getElementById("reset"),
    stop = document.getElementById("stop");

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;
function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec > 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec > 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}
start.addEventListener("click", function () {
    toggle();
    interval = setInterval(timer, 10)
});

stop.addEventListener("click", function () {
    clearInterval(interval);
    toggle()
});

reset.addEventListener("click", function () {
    toggle();
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
});

function toggle() {
    if (start.disabled) {
        start.disabled = false;
        stop.disabled = true;
    } else{
        start.disabled = true;
        stop.disabled = false;
    }
}