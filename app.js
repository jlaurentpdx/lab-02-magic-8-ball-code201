import { answers } from './answers.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const question = document.getElementById('question');
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

    updateTextContent(question, `You asked ${input.value}`);
    updateTextContent(answerDisplay, randomAnswer);
    
    input.placeholder = '...another?';
});