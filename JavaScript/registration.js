const body = document.getElementById('body');

//  Form container
const entranceForm = document.createElement('div');


// Wrapper
const entranceWrapper = document.createElement('form');
entranceWrapper.classList.add('entranceWrapper');
entranceWrapper.onsubmit = () => checkForm(entranceWrapper);


// Back mark
const backMark = document.createElement('img');
backMark.setAttribute('src', '../png/backSVG.svg');
backMark.classList.add('backMark');

// Password eye
const eye1 = document.createElement('img');
eye1.setAttribute('src', '../png/eye-disible.svg');
eye1.classList.add('eye1');

// Password eye 2
const eye2 = document.createElement('img');
eye2.setAttribute('src', '../png/eye-disible.svg');
eye2.classList.add('eye2');

// Function: visible password

function willVisible(a, b) {
    if (a.src == 'http://127.0.0.1:5500/png/eye-disible.svg') {
        a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-visible.svg')
    } else {a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-disible.svg')}

    if (b.type == 'password') {
        b.setAttribute('type', 'text')
    } else {b.setAttribute('type', 'password')}
}

eye1.onclick = () => willVisible(eye1, passwordInput);
eye2.onclick = () => willVisible(eye2, repeatPasswordInput);


// ---------------  Form  -----------
const entranceName = document.createElement('div');
entranceName.classList.add('entranceName');

// Title
const nameTitle = document.createElement('div');
nameTitle.append('Registration:');
nameTitle.classList.add('nameTitle');
entranceName.append(nameTitle);

// Name
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
nameInput.setAttribute('required', 'true');
nameInput.classList.add('formFactor');
entranceName.append(nameInput);

// Surname
const surnameInput = document.createElement('input');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('placeholder', 'Surname');
surnameInput.setAttribute('required', 'true');
surnameInput.classList.add('formFactor');
entranceName.append(surnameInput);

// Email
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('required', 'true');
emailInput.classList.add('formFactor');
entranceName.append(emailInput);

// Password
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('autocomplete', 'current-password');
passwordInput.setAttribute('required', 'true');
passwordInput.classList.add('formFactor');
entranceName.append(passwordInput);

// Repeat password
const repeatPasswordInput = document.createElement('input');
repeatPasswordInput.setAttribute('type', 'password');
repeatPasswordInput.setAttribute('placeholder', 'Repeat password');
repeatPasswordInput.setAttribute('required', 'true');
repeatPasswordInput.classList.add('formFactor');
entranceName.append(repeatPasswordInput);

// 

// Button registration
const buttonRegistration = document.createElement('button');
buttonRegistration.setAttribute('type', 'submit');
buttonRegistration.classList.add('buttonRegistration')
buttonRegistration.append('Log in')


// Luggage
entranceWrapper.append(backMark, entranceName, buttonRegistration, eye1, eye2);
entranceForm.append(entranceWrapper);
body.append(entranceForm);

//-----------------------  Check form  -----------------------

function checkForm(form) {
     
}