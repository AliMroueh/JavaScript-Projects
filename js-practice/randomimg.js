var myelement = document.getElementById('img'),

myimgs = ["https://www.placehold.it/300/200",
         "https://www.placehold.it/400/200",
         "https://www.placehold.it/500/200",
         "https://www.placehold.it/600/200"];





function int(){
    setInterval(function(){
        var randomnum = Math.floor(Math.random() * myimgs.length);
        console.log(randomnum);
    },1000);
}

int();