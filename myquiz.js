let question_count = document.querySelector('.quiz-app .quiz-info .count span');
let bullets = document.querySelector('.quiz-app .bullets');
let bullet_count = document.querySelector('.quiz-app .bullets .spans');
let bullet_counter_down = document.querySelector('.quiz-app .bullets .countdown');
let quiz_area = document.querySelector('.quiz-app .quiz-area');
let answer_area = document.querySelector('.quiz-app .answers-area');
let submit_button = document.querySelector('.quiz-app .submit-button');
let quiz_result = document.querySelector('.quiz-app .results');
let right_answer = 0;
let wrong_answer = 0;
let current_question = 1;


function myrepo(){

    var myrequest = new XMLHttpRequest();

    myrequest.onreadystatechange = function () {
    
         if(this.readyState === 4 && this.status === 200 ){
           
           var myobject = JSON.parse(this.responseText);

           question_count.textContent = myobject.length;


            // create the count down function
            countdown_timer(myobject,'3');  
                 

            // create all the bullets
            create_bulletspans(myobject.length);

            // set current bullet
            set_current_bullet(current_question);

            // Set the current question
            create_question(myobject[current_question - 1].title);

        //    create answer of the question
           create_answer(myobject[current_question - 1]);

         }
    }
    myrequest.open(
        "GET",
        "quiz.json",
        true
    );
    myrequest.send();
};
myrepo();

const create_bulletspans = (len) => {
    for(let i =0; i<len;i++){
    let create_bulletspan = document.createElement('span');

    bullet_count.appendChild(create_bulletspan);
    }
};

const countdown_timer = (bull,seconds) => {
     
    var secondpass,
    countdown =setInterval(function(){
        'use strict';
        if(current_question < 10){
        secondpass();
        }
    },1000);

    submit_button.onclick = function(){
        clearInterval(countdown);
        saveit(bull);
        countdown_timer(bull,'3');
    }

    

function secondpass(){
    'use strict';
    var minutes = Math.floor(seconds /60),
        sec = seconds % 60;
    if(sec < 10){
        sec = "0"+sec;
    }
    bullet_counter_down.textContent = minutes + ": " + sec;
    if(seconds > 0){
        seconds -= 1;
    }else{
        clearInterval(countdown);
       saveit(bull);
       countdown_timer(bull,'3');
    }
}

};

    // function create the question
    function create_question(quest){

        //Create h2 that will be used in question
        let hh2 = document.createElement('h2'); 

         // create the question
         let ques = document.createTextNode(quest);

         // Add the question to the h2
         hh2.appendChild(ques);

          // Append h2 to the quiz-area
        quiz_area.appendChild(hh2);
    };

    // function set the current bullet
function set_current_bullet(curr){

bullet_count.children[curr-1].classList.add('on');
}



// function create the answers of the question
function create_answer(curr){
    let propvalue = Object.values(curr);
    let propname = Object.keys(curr);
    for( let i=1 ; i<5 ;i++){
     
     // create the div that contain the answer
        let the_answer = document.createElement('div');

        // set the classname of the div of the answer
        the_answer.className = 'answer';

        // Create the radio input
        let the_input = document.createElement('input');

        // set the name to the input
        the_input.name = 'question' 

        // set the type radio button to the input
        the_input.type = 'radio' ;

        // set the id to the input
        the_input.id = propname[i]; 

        // Set the data-answer
        the_input.dataset.answer = propvalue[i];

        // Create the label
        let the_label = document.createElement('label');

        // Set the for attribute for the label
        the_label.setAttribute('for',propname[i]);
        
        // Put the value in the label
        the_label.textContent = propvalue[i];

        // append the input to the div answer
        the_answer.appendChild(the_input);

        // append the label to the div answer
        the_answer.appendChild(the_label);

        // Append the div of the answer to the answer area
        answer_area.appendChild(the_answer);
    
    }

    // Set the first input checked
    let first_inp = document.querySelector('.quiz-app .answers-area .answer #answer_1');
    first_inp.classList.add('active');
    first_inp.setAttribute('checked','true');

    let all_inp = document.querySelectorAll('.quiz-app .answers-area .answer input');

    Array.from(all_inp).forEach(check =>{
        check.onclick = function() {

            Array.from(all_inp).forEach(check1 =>{
                check1.classList.remove('active');
            })
            check.classList.add('active');
        }
    }

        )
}


// function delete the answers of the question
function delete_answer(){
    let the_question = document.querySelector('.quiz-app .quiz-area h2');
    the_question.remove();
    for( let i=1 ; i<5 ;i++){
     // Bring the div that contain the answer
        let the_answer = document.querySelector('.quiz-app .answers-area .answer');
        the_answer.remove();
    }
    };


// Function to save the change
function saveit(bull){
      // check if the answer is right then add one
      if(document.querySelector('.quiz-app .answers-area .answer .active').dataset.answer === 
      Object.values(bull[current_question - 1])[5]){
         right_answer = right_answer + 1;
         console.log(true)
     }

    current_question = current_question + 1;

    if(current_question < 10){

// Delete the current question and answers
delete_answer();

// Create the new answers
create_answer(bull[current_question - 1]);

// Set the current question
create_question(bull[current_question - 1].title);

// set current bullet
set_current_bullet(current_question);
}else{
     
        // Remove the button
        submit_button.remove();

        quiz_area.remove();
        bullets.remove();
        answer_area.remove();

        let add_span = document.createElement('span');
        if(right_answer < 5){
            add_span.className = 'bad';
            let txt = document.createTextNode('Bad');
            add_span.appendChild(txt);
        }else  if(right_answer > 4 && right_answer < 8){
            add_span.className = 'good';
            let txt = document.createTextNode('Good');
            add_span.appendChild(txt);
        }else if(right_answer > 7 ){
            add_span.className = 'perfect';
            let txt = document.createTextNode('Perfect');
            add_span.appendChild(txt);
        }
        let quiz_txt = ` , ${right_answer} From 9`;
        let the_txt = document.createTextNode(quiz_txt);
        quiz_result.appendChild(add_span);
        quiz_result.appendChild(the_txt);
        
    }
};

