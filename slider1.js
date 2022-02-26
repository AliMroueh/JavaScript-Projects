let slidenum =document.querySelector('.slide-number'),
    slidercontainer = document.querySelector('.slider-container'),
    prev = document.querySelector('.slider-controls .prev'),
    next = document.querySelector('.slider-controls .next'),
    indicators = document.querySelector('.slider-controls .indicators'),
    images = document.querySelectorAll('.slider-container img');

    var num = 1;

    images[num-1].classList.add('active');
    
    // create the ul
    let ull = document.createElement('ul');

    // create li
    for(let i=num; i<= images.length; i++){
        let lii = document.createElement('li');

        //add text
        let txt = document.createTextNode(i)

        // add text to li
        lii.appendChild(txt);

        // add li to ul
        ull.appendChild(lii);
    };

    // add ul to class indicator
    indicators.appendChild(ull);

    let  allli = document.querySelectorAll('.slider-controls .indicators ul li');

    allli.forEach(lala => 
        lala.onclick = function(){
        return num = lala.innerHTML
        }
    );
    allli[num-1].classList.add('active');

    function nextele(){
        next.onclick = function(){
            allli[num-1].classList.remove('active');
            images[num-1].classList.remove('active');
            num++;
            if(num === images.length){
                next.classList.add("disabled");
            }
                if(num > 1){
                prev.classList.remove("disabled");
                
            }
            allli[num-1].classList.add('active');
            images[num-1].classList.add('active');
        //  console.log(num)
        }
    }
    

    function prevele(){
        prev.onclick = function(){
            allli[num-1].classList.remove('active');
            images[num-1].classList.remove('active');
            num--;
            if(num === 1){
                prev.classList.add("disabled");
            }
                if(num < images.length){
                next.classList.remove("disabled")
            }
            allli[num-1].classList.add('active');
            images[num-1].classList.add('active');

      //console.log(num)
        }
        
    }
        
        nextele();
        prevele();
        

    

    