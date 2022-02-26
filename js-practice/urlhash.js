

if(window.location.hash ){
    console.log("there is hash");
    
    if(window.location.hash.indexOf('amin') ===1){ // 0 === #
            console.log('amin');
        var hash = window.location.hash.substring(0);
        console.log(hash);

    }
    
}else{
    console.log("there is no hash");
}

