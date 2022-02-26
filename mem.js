
// remove the div start game from the background and name the user
document.querySelector('.control-buttons').onclick = function(){

    // Bring the name of the user
    let thename = prompt('What is your name?');

    // remove the div start game from the background
    this.style.display = 'none';
    // check if thename is empty then name it unkown
    if(thename==''){
        thename = 'Unkown';
    }

    // put the name beside Hello
    document.querySelector('.name span').innerHTML = thename;
}

let blocks = document.querySelectorAll('.game-block');

let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);

shuffle(orderRange);

console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

    // Add CSS Order Property
    block.style.order = orderRange[index];
  
  });

let c=0;
let arr = [];
document.addEventListener('click' , (e) =>{

       // turn the image when press on it
       if(e.target.className == 'face front'){
        e.target.parentNode.classList.add('is-flipped');
        c++;   

        // put the source image in an array
        let sos = e.target.parentNode.lastElementChild.firstElementChild.getAttribute('src');
        arr.push(sos);
        // console.log(arr)
    }
    
    // stop click if there is two image flipped
    function counttwo(){
     
        // stop click if there is two image flipped
    if(c==2){
        // stop all the button
        document.querySelector('.memory-game-blocks').classList.add('no-clicking');

        // re-inialize the c
        c = 0;


        // remove no-clicking from all the button after two second
        var soso = setTimeout(function removenoclicking(){
            // remove the no-clicking from all the button
            document.querySelector('.memory-game-blocks').classList.remove('no-clicking');

           

            // remove the flipped from the image
            Array.from(document.querySelector('.memory-game-blocks').children).forEach(v => {
                if(v.classList.contains('is-flipped')){
                v.classList.remove('is-flipped');

                // check if the two image is identical
               if(arr[0] == arr[1]){
                v.classList.add('has-match')  
            }
                }

                 
            });

            if(arr[0] !== arr[1]){
            // increment the wrong answer
    document.querySelector('.tries span').innerHTML = parseInt(document.querySelector('.tries span').innerHTML) + 1;
            }
            arr = [];

            clearInterval(soso);
            
        },1000);
        
    }
}
counttwo();



})



function shuffle(array){
    let current = array.length,
    temp,
    rand;

    while(current > 0){
    rand = Math.floor(Math.random() * current);

    current--;

    temp = array[current];

    array[current] = array[rand];

    array[rand] = temp;
    }

    return array;
}