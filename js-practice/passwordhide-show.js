var btn = document.getElementById('btn'),
    inp = document.getElementById('inp');

btn.onclick = function(){
if( btn.textContent === 'show password'){
    inp.setAttribute('type' , 'text');
    btn.textContent = 'hide password';
}else{
   inp.setAttribute('type' , 'password');
    btn.textContent = 'show password'; 
}
}