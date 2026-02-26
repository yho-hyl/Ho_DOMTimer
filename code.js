let time = 0;
let on = true

document.getElementById("startTimer").addEventListener("click", command);
document.getElementById("stopTimer").addEventListener("click", command);
document.getElementById("resetTimer").addEventListener("click", resett);

function startt() {
    on = true;
    console.log(time);
    document.getElementById("stopwatch").innerHTML = time++;

}


function stopt() {
    on = false
    console.log(time)
    document.getElementById("stopwatch").innerHTML = time;
}


function resett() {
    document.getElementById("stopwatch").innerHTML = time -= time;
    
}



function command() {
    if (on == true) {
        setTimeout(startt, 1000);
    } else if (on == false) {
        setTimeout(stopt, 1000);

    }
}

