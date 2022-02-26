var txt = document.getElementById('txt'),
    span = document.getElementById('sp');

txt.onkeyup = function(){
    'use strict';
    span.textContent = 50 - this.value.length;
    if(span.textContent < 0){
        span.style.color = '#f00';
    }else{
        span.style.color = '#000';
    }
};