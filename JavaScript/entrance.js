import { pictureFirstShadow } from './script.js';
import { switchToPiano } from './functions.js';
import { willVisible } from './functions.js';

// ----------------------  Entrance form ---------------------------
const root3 = document.createElement('div');
root3.classList.add('root3');

// Entrance wrapper
const entranceWrapper = document.createElement('div');
entranceWrapper.classList.add('entranceWrapperReg', 'entranceWrapper');

// Form
const entranceForm = document.createElement('form');
entranceForm.setAttribute('onsubmit', 'return false');
entranceForm.classList.add('entranceForm');

// Back mark
const backEntranceMark = document.createElement('img');
backEntranceMark.setAttribute('src', '../png/backSVG.svg');
backEntranceMark.classList.add('backEntranceMark');
backEntranceMark.onclick = () => {
    pictureFirstShadow.style.zIndex = '1';
    root3.style.display = 'none';
}

// Email
const emailEntranceInput = document.createElement('input');
emailEntranceInput.setAttribute('type', 'email');
emailEntranceInput.setAttribute('placeholder', 'Email');
emailEntranceInput.setAttribute('required', 'true');
emailEntranceInput.setAttribute('id', 'entranceEmail');
emailEntranceInput.classList.add('formFactor');
entranceForm.append(emailEntranceInput);

// Password
const passwordEntranceInput = document.createElement('input');
passwordEntranceInput.setAttribute('type', 'password');
passwordEntranceInput.setAttribute('id', 'entrancePassword');
passwordEntranceInput.setAttribute('placeholder', 'Password');
passwordEntranceInput.setAttribute('autocomplete', 'current-password');
passwordEntranceInput.setAttribute('required', 'true');
passwordEntranceInput.classList.add('formFactor');
entranceForm.append(passwordEntranceInput);

// Password eye
const eye1 = document.createElement('img');
eye1.setAttribute('src', '../png/eye-disible.svg');
eye1.classList.add('eye3');

eye1.onclick = () => willVisible(eye1, passwordEntranceInput);

// Error text
const errorEntranceText = document.createElement('div');
errorEntranceText.classList.add('errorEntranceText');
errorEntranceText.append('Invalid email or password');
entranceForm.append(errorEntranceText);

// Buttons entrance
const entranceButtons = document.createElement('div');
entranceButtons.classList.add('entranceButtons');
entranceForm.append(entranceButtons);

const entrance = document.createElement('input');
entrance.setAttribute('type', 'submit');
entrance.setAttribute('value', 'Entrance');
entrance.classList.add('butt');
entrance.onclick = () => switchToPiano();



entranceButtons.append(entrance);



// Luggage
entranceWrapper.append(entranceForm, backEntranceMark, eye1);
root3.append(entranceWrapper);

export { root3, emailEntranceInput, passwordEntranceInput, errorEntranceText }