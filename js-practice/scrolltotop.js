var btn = document.getElementById('bb');
/*
if(pageYOffset >= 800){
    btn.getAttribute('class' , 'btn').style.display = 'block';
}
*/
 window.onscroll = function(){
     'use strict';
     if(window.pageYOffset >= 800){
          btn.style.display = 'block';
    
}else{
    btn.style.display = 'none';
}
console.log(window.pageYOffset);
 }
 
 btn.onclick = function() {
     'use strict';
     window.scrollTo(0,0);
 }
 