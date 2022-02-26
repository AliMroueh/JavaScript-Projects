var mytxt = "hello from elzero web school this is type writer effects on text",
    i = 0,
    mybtn = document.getElementById('btn');

    mybtn.onclick = function (){
        var newtxt = [];
        'use strict';
        var oldtxt = mytxt.split(' ');
        console.log(oldtxt);
        for(var x=0 ;x < oldtxt.length ; x++){
            newtxt.push(oldtxt[x].charAt(0).toUpperCase() + oldtxt[x].slice(1)) 
        }
        var extra = newtxt.join(' ');;
        console.log(extra);
         var int = setInterval(function(){
            document.getElementById('type').textContent += extra[i];
            i += 1;
            
            if(i > extra.length -1 ){
            clearInterval(int);
            }
        },200)

    }



//    mybtn.onclick = function() {
//        split1();
//        'use strict';
//        var int = setInterval(function(){
//            document.getElementById('type').textContent += newtxt[i];
//            i += 1;
//            
//            if(i > newtxt.length -1 ){
//            clearInterval(int);
//            }
//        },200)
//    };

