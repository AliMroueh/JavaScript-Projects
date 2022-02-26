$(document).ready(function(){
   $('.carousel').carousel({
       interval:6000
   });
    
    // Show color option div when click on the gear
    $('.gear-check').click(function(){
        $('.color-option').toggle();
    })
});