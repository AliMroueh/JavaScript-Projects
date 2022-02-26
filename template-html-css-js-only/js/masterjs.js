// check if there is local storage color option
let maincolors = localStorage.getItem("color-option");

if(maincolors !== null){
    document.documentElement.style.setProperty("--main-color" , maincolors);

    //remove active class from all colors list item
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");

        // Add active class on element with data-color  === local storage item
        if(element.dataset.color === maincolors){

            //add active class
            element.classList.add("active");
        }
    });

    
}

    // Random background option
    let backgroundOption = true; 

    // variable to controle the background interval
    let backgroundInterval;

    // check if there is local storage random background item
    let backgroundLocalItem = localStorage.getItem("background-option");

    // check if background local storage is not empty
    if(backgroundLocalItem !== null){
        if(backgroundLocalItem === 'true'){
            backgroundOption = true;
        }else{
            backgroundOption = false;
        }

        // remove active class from all spans
        document.querySelectorAll(".randombackgroud span").forEach(element =>{
            element.classList.remove("active");
        });
            if(backgroundLocalItem === 'true'){
                document.querySelector(".randombackgroud .yes").classList.add("active");
            }else{
                document.querySelector(".randombackgroud .no").classList.add("active");
            }
        
        
    }

// toggle spin class on icon
document.querySelector(".toggle-setting .fa-gear").onclick = function(){
    // toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    // toggle class open on main setting class
        document.querySelector(".settings-box").classList.toggle("open");
}

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

// loop on all list items
colorsLi.forEach(li => {

    //click on every list items
   li.addEventListener("click",(e) => {

       // set color on root
       // documentElement print
    document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);

    //set color on local storage
    localStorage.setItem("color-option",e.target.dataset.color);

     handleactive(e);
   });
});

// switch random background option
const randombackel = document.querySelectorAll(".randombackgroud span");

// loop on all spans
randombackel.forEach(span => {

    //click on every spans
   span.addEventListener("click",(e) => {

    handleactive(e);

    if(e.target.dataset.backgrounds === "yes"){
         backgroundOption = true;
         randomizeImgs();
         localStorage.setItem("background-option",true);
        
    }else{
         backgroundOption = false;
         clearInterval(backgroundInterval);
         localStorage.setItem("background-option",false);
    }
   });
});

let landingPage = document.querySelector(".landing-page");

let arrimg = ["1-img.jpg","2-img.jpg","3-img.jpg","4-img.png","5-img.jpg",];

// function to randomize images
function randomizeImgs(){

    if(backgroundOption === true){
        backgroundInterval = setInterval(()  => {
            
            //Get random number
        let randomnum = Math.floor(Math.random() * arrimg.length);
        // change background image url
        landingPage.style.backgroundImage = 'url("images/'+ arrimg[randomnum] +'")';}
        ,1000);
        }
}
randomizeImgs();

//Select skills selector
let ourskills = document.querySelector(".skills");

window.onscroll = function(){

    //Skills offset top
    let skillsoffsettop = ourskills.offsetTop;

    //Skills outer height
    let skillsouterheight = ourskills.offsetHeight;
    
    //window height
    let windowheight = this.innerHeight;

    //window scrolltop
    let windowscrolltop = this.scrollY;
console.log(windowheight);
    if(windowscrolltop > skillsoffsettop + skillsouterheight - windowheight){
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
        })
    }

}

// create popup with the image
let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img =>{
    img.addEventListener("click",(e) =>{
    
        //create overlay element
        let overlay = document.createElement('div');

        //add class to overlay
        overlay.className = ('popup-overlay');

        //append overlay to the body
        document.body.appendChild(overlay);

        //create popup box
        let popupbox = document.createElement('div');
        
        //add class to  popup box
        popupbox.className = ('popup-box');

        if(img.alt !== null){

            // create heading
            let imgheading = document.createElement('h3');
        
            // create text for heading
            let imgtext = document.createTextNode(img.alt);
        
            // append the text to the heading
            imgheading.appendChild(imgtext);
            
            // append the heading to the popup box
            popupbox.appendChild(imgheading);
        }

         //create the image
         let popupimage = document.createElement('img');
        
         //set image source
         popupimage.src = img.src;

         //add image to popup box
         popupbox.appendChild(popupimage);

         //add the popup box to the body
         document.body.appendChild(popupbox);

         //create the close span
         let closebutton = document.createElement('span');

         //create the close button text
         let closebuttontext = document.createTextNode('X');

         // append text to close button
         closebutton.appendChild(closebuttontext);

         //add class to close button
         closebutton.className = 'close-button';

         //add close button to the popup box
         popupbox.appendChild(closebutton);


});
});

// close the popup
document.addEventListener('click',function(e){
    if(e.target.className === 'popup-overlay' || e.target.className === 'close-button'){
        
        document.querySelector('.popup-box').remove();
        document.querySelector('.popup-overlay').remove();
    }
});

// Select all bullets

const allbullets = document.querySelectorAll(".nav-bullets .bullet");

// Select all link

const alllink = document.querySelectorAll(".links a");

function gotosomewhere(element){
    element.forEach(el =>{
        el.addEventListener('click',(e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
    });
};
gotosomewhere(allbullets);
gotosomewhere(alllink);

// Handle active state
function handleactive(ev){
     // remove active class from all children
     ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
    });

    //add class on self
    ev.target.classList.add("active");
}

let bulletspan = document.querySelectorAll('.bullets-option span');

let bulletscontainer = document.querySelector('.nav-bullets');

let bulletlocalitem = localStorage.getItem('bullets-option');

if(bulletlocalitem !== null){

    bulletspan.forEach(span => {
        span.classList.remove('active');
    });
    if(bulletlocalitem === 'block'){
        bulletscontainer.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
        
    }else{
        bulletscontainer.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');
    }

};

bulletspan.forEach(span => {
    span.addEventListener('click' , (e) => {
        if(span.dataset.display === 'show'){
            bulletscontainer.style.display = 'block';
            localStorage.setItem('bullets-option','block')
        }else{
            bulletscontainer.style.display = 'none';
            localStorage.setItem('bullets-option','none')
        }
        handleactive(e);
        
    })
});

// Reset button
document.querySelector('.reset-options').onclick = function(){
    // localStorage.clear(); // it remove all the localstorage but if you want to remove some 
    //localstorge you should use the way down

    localStorage.removeItem('color-option');
    localStorage.removeItem('background-option');
    localStorage.removeItem('bullets-option');
    
    // Reload window
    window.location.reload();
}

// Toggle menu
let togglebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector('.links');

togglebtn.onclick = function(e){

    // Stop propagation
    e.stopPropagation(); // to stop make effect when click on the span between the button
     
    // Toggle class 'menu-active' on button
    this.classList.toggle('menu-active');

    // Toggle class 'open' on links
    tlinks.classList.toggle('open');
}

// click anywhere outside menu and toggle button
document.addEventListener('click',(e) => {

   if(e.target !== togglebtn && e.target !== tlinks){

    // Check if menu is open
    if(tlinks.classList.contains('open')){

        // Toggle class 'menu-active' on button
        togglebtn.classList.toggle('menu-active');

    // Toggle class 'open' on links
    tlinks.classList.toggle('open');

    }
}
});

// stop propagation on menu
tlinks.onclick = (e) =>{
    e.stopPropagation();
};
