'use strict';

// const button1 = document.getElementById('toggle-checkbox-1');
// const button2 = document.querySelector('#toggle-checkbox-2');
// const button3 = document.querySelector('#toggle-checkbox-3');
// const button4 = document.querySelector('#toggle-checkbox-4');

// console.log(button1);

// let clicked = true;

// button1.addEventListener('click', () => {
//     const answer1 = document.getElementById('answer-1');

//     if (clicked === true) {
//         answer1.classList.add('active')
//         clicked = false;
//     }else {
//         answer1.classList.remove('active')
//         clicked = true
//     }
// } )


const buttons = document.querySelectorAll('.toggle-checkbox');
const questions = document.querySelectorAll('h3');
const buttonsArray = Array.from(buttons);
const questionsArray = Array.from(questions);
console.log(buttonsArray);

//handling the click on the buttons
buttonsArray.forEach((btn, i) => {
    let clicked = true;
    
    btn.addEventListener('click', () => {
        // console.log(i);
        const answer = document.getElementById(`answer-${i + 1}`);
        const span = document.getElementById(`span-${i + 1}`)
        console.log(span);
        // console.log(document.getElementById(`answer-${i + 1}`));

    if (clicked === true) {
        // console.log(answer);
        answer.classList.add('active')
        span.style.display = 'none'
        btn.style.backgroundColor = 'hsl(292, 42%, 14%)'
        clicked = false;
    }else {
        answer.classList.remove('active')
        span.style.display = 'block'
        btn.style.backgroundColor = 'hsl(292, 16%, 49%)'
        clicked = true
    }
    })

    //handling the keyboard event
    btn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // console.log(i);
        const answer = document.getElementById(`answer-${i + 1}`);
        const span = document.getElementById(`span-${i + 1}`)
        console.log(span);
        // console.log(document.getElementById(`answer-${i + 1}`));

    if (clicked === true) {
        // console.log(answer);
        answer.classList.add('active')
        span.style.display = 'none'
        btn.style.backgroundColor = 'hsl(292, 42%, 14%)'
        clicked = false;
    }else {
        answer.classList.remove('active')
        span.style.display = 'block'
        btn.style.backgroundColor = 'hsl(292, 16%, 49%)'
        clicked = true
    }    
        }
    })
})

//handling the click on the questions
questionsArray.forEach((que, i) => {
    let clicked = true;

    que.addEventListener('click', () => {
       // console.log(i);
        const answer = document.getElementById(`answer-${i + 1}`);
        const btn = document.getElementById(`toggle-checkbox-${i + 1}`);
        const span = document.getElementById(`span-${i + 1}`);
        console.log(span);
        // console.log(document.getElementById(`answer-${i + 1}`));

    if (clicked === true) {
        // console.log(answer);
        answer.classList.add('active')
        span.style.display = 'none'
        btn.style.backgroundColor = 'hsl(292, 42%, 14%)'
        clicked = false;
    }else {
        answer.classList.remove('active')
        span.style.display = 'block'
        btn.style.backgroundColor = 'hsl(292, 16%, 49%)'
        clicked = true
    }     
    })
}) 