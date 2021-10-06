import { answers } from './answers.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const prevQuestion = document.getElementById('prev-question');
const repeatQuestion = document.getElementById('repeat-question');
const answerDisplay = document.getElementById('answer-display');

const generateRandomInt = (max) => {
    return Math.floor(Math.random() * max);   
};

function updateTextContent(element, newText) {
    return element.textContent = newText;
}

button.addEventListener('click', () => {
    const randomIdx = generateRandomInt(answers.length);
    const randomAnswer = answers[randomIdx];

    if (input.value === '') {
        alert('Questions go in the box, please.');
    } else {
        updateTextContent(prevQuestion, input.value);
        updateTextContent(answerDisplay, randomAnswer);
        
        input.value = '';
        input.placeholder = '...another?';
        
        repeatQuestion.style.visibility = 'visible';
        prevQuestion.style.visibility = 'visible';
    }
});

