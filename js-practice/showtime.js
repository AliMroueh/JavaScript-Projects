function showtime(){
    'use strict';
    var now =new Date(),
    hours = now.getHours(),
        minutes = now.getMinutes(),
    second = now.getSeconds();
    
    if(hours < 10 ){
        hours = '0' + hours;
    }
    
    if(minutes < 10 ){
        minutes = '0' + minutes;
    }
    
    if(minutes < 10 ){
        minutes = '0' + minutes;
    }
    document.getElementById('clock').textContent = hours + " : " + minutes + " : " + second;
}

window.onload = function(){
    setInterval(showtime,500);
}