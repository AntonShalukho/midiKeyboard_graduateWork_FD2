// import { pictureFirstShadow } from './script.js'
// ----------------------  Entrance form ---------------------------
const root3 = document.getElementById('body');

// Entrance wrapper
const entranceWrapper = document.createElement('div');
entranceWrapper.classList.add('entranceWrapper');

// Form
const entranceForm = document.createElement('form');
entranceForm.classList.add('entranceForm');

// Back mark
const backEntranceMark = document.createElement('img');
backEntranceMark.setAttribute('src', '../png/backSVG.svg');
backEntranceMark.classList.add('backEntranceMark');
backEntranceMark.onclick = () => {
    // pictureFirstShadow.style.zIndex = '1';
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

// Buttons entrance
const entranceButtons = document.createElement('div');
entranceButtons.classList.add('entranceButtons');
entranceForm.append(entranceButtons);

const entrance = document.createElement('input');
entrance.setAttribute('type', 'button');
entrance.setAttribute('value', 'Entrance');
entrance.classList.add('Butt');


const forgotPass = document.createElement('input');
forgotPass.setAttribute('type', 'button');
forgotPass.setAttribute('value', 'Forgot password?');
forgotPass.classList.add('Butt');
entranceButtons.append(entrance, forgotPass);



// Luggage
entranceWrapper.append(entranceForm, backEntranceMark);
root3.append(entranceWrapper);