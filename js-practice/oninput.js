
document.getElementById('count').innerHTML = localStorage.getItem('ppp');
var $count = document.getElementById('count'),
     $textarea = document.getElementById('text'),
     $maxlength = $textarea.getAttribute('maxlength');

$textarea.oninput = function() {
    $count.innerHTML = $maxlength - this.value.length;
    localStorage.setItem('ppp',$count.innerHTML);
   
}

// oninput : accept all the button