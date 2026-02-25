const d = new Date();
let time = d.getSeconds() - d.getSeconds()
on = true


document.getElementById("startTimer").addEventListener("click", startt);
document.getElementById("stopTimer").addEventListener("click", stopt);
document.getElementById("resetTimer").addEventListener("click", resett);

function startt() {
    while (on == true) {
        document.getElementById("stopwatch").innerHTML = time++;
        //setTimeout(startt,1000);
        
    }    
}

function stopt() {
    on = false
    
}

function resett() {
    document.getElementById("stopwatch").innerHTML = time -= time;
    
}
