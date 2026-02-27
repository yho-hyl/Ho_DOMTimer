let counter = 0;
let timeout;
let timer_on = 0;

document.getElementById("startTimer").addEventListener("click", startCount);
document.getElementById("stopTimer").addEventListener("click", stopt);
document.getElementById("resetTimer").addEventListener("click", resett);

function startt() {
    document.getElementById("stopwatch").innerHTML = counter;
    counter++;
    timeout = setTimeout(startt, 1000);

}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        startt();

    }
}
function stopt() {
    clearTimeout(timeout);
    timer_on = 0;

}


function resett() {
    document.getElementById("stopwatch").innerHTML = counter -= counter;
    
}


