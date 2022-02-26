var mytxt =document.getElementById('my-input');
mytxt.onfocus = function(){
    mytxt.setAttribute('data',mytxt.getAttribute('placeholder'));
    mytxt.setAttribute('placeholder','') ;
};

mytxt.onblur = function(){
    mytxt.setAttribute('placeholder',mytxt.getAttribute('data'));
    mytxt.setAttribute('data','') ;
};