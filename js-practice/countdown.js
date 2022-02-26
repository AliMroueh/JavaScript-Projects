
var dod = document.getElementById('countdown'),
    seconds = '3',
    secondpass,
    countdown =setInterval(function(){
        'use strict';
        secondpass();
    },1000);

function secondpass(){
    'use strict';
    var minutes = Math.floor(seconds /60),
        sec = seconds % 60;
    if(sec < 10){
        sec = "0"+sec;
    }
    dod.textContent = minutes + ": " + sec;
    if(seconds > 0){
        seconds -= 1;
    }else{
        clearInterval(countdown);
        dod.textContent = "Done";
    }
}
