function mkserial(){
    'use strict';
    var chars='1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        serialwant = [20,21,22,23,24],
        serialnum = '' ,
        seriallength = chars.length,
        randomnum ,
        i,
        serialdo,
        serialme,
        x;
    
        serialme = Math.floor(Math.random() * 5);
        serialdo =  serialwant[serialme];
    
    console.log(serialdo);
        
    for(i=0;i<serialdo;i =i+1){
        randomnum = Math.floor(Math.random() * seriallength);
       // serialnum += chars.substring(randomnum , randomnum + 1) ; // or
        serialnum += chars.charAt(randomnum);
    }
    document.getElementById('serial').textContent = serialnum ;
};
