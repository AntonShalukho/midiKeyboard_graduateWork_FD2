import { emailInput } from './registration.js';
import { invalidFormText1 } from './registration.js';
import { invalidFormText2 } from './registration.js';
import { repeatPasswordInput } from './registration.js';
import { passwordInput } from './registration.js';
import { nameInput } from './registration.js';
import { surnameInput } from './registration.js';
import { emailEntranceInput } from './entrance.js';
import { passwordEntranceInput } from './entrance.js';
import { errorEntranceText } from './entrance.js';

//-------------------------- Function: visible password  ---------------------------

function willVisible(a, b) {
    if (a.src == 'http://127.0.0.1:5500/png/eye-disible.svg') {
        a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-visible.svg')
    } else {a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-disible.svg')}

    if (b.type == 'password') {
        b.setAttribute('type', 'text')
    } else {b.setAttribute('type', 'password')}
}

//-----------------------  Check form  -----------------------

//Check function
function checkForm(form) {
    getValid(form)
}

// Valid function
function getValid(form) {
    invalidFormText1.style.display = 'none';
    invalidFormText2.style.display = 'none';
    if (getValidName(nameInput) && getValidName(surnameInput)) {

        if (getValidEmail(emailInput)) {
            
            const arr = JSON.parse(localStorage.getItem('users'));
            let acc = true;

            if (arr != null || arr) {
                endFor:
                for (let i of arr) {
                    if (i.user.email == emailInput.value) {
                        acc = false;
                        invalidFormText1.style.display = 'flex';
                        break endFor
                    } 
                }
            } 

            if (acc) {
                if (getValidPassword(passwordInput, repeatPasswordInput)) {
                    if (localStorage.getItem('users')) {
                        setLocalInfo(form);
                    } else {
                        setFirstLocalInfo(form);
                    }
                } else {invalidFormText2.style.display = 'flex'}
            }
        }
    }

}

// Create user's function 
function setLocalInfo(form) {
    let acc = JSON.parse(localStorage.getItem('users'));

    const obj = {
        id: acc.length + 1,
        user: {
            name: `${form.name.value}`,
            surname: `${form.surname.value}`,
            email: `${form.email.value}`,
            password: `${form.password.value}`
        }
    }

    acc[acc.length] = obj;
    localStorage.setItem('users', JSON.stringify(acc));
    location.reload()
}

// Create first user's function
function setFirstLocalInfo(form) {
    const obj = {
        id: 1,
        user: {
            name: `${form.name.value}`,
            surname: `${form.surname.value}`,
            email: `${form.email.value}`,
            password: `${form.password.value}`
        }
    }

    let acc = [obj];
    localStorage.setItem('users', JSON.stringify(acc));
    location.reload()
}


// Valid name's function
function getValidName(inp) {
    const r = /^[A-Za-zА-Яа-яЁё-]{1,}$/;
    let acc = false;

    if (inp.value != '') {
        if (r.test(inp.value)) {
            acc = true;
        }
    } 
    return acc
}

// Valid email's function
function getValidEmail(email) {
    const r = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
    let acc = false;

    if (email.value != '') {
        if (r.test(email.value)) {
            acc = true;
        } 

    } 
    return acc
}

// Valid password's function
function getValidPassword(pass, repPass) {
    const r = /[0-9A-Za-z]{6,20}/;
    let acc = false;

    if (pass.value != '' && repPass.value != '' && pass.value == repPass.value) {
        if (r.test(pass.value)) {
            acc = true;
        }
    } 
    return acc
}

//------------------------  Entrance  -------------------------------------------------

// Entrance 
function switchToPiano() {
    validEntrance()
}

function validEntrance() {
    if (validEntranceEmail() && validEntrancePass()) {
        goToPiano()
    } else {
        errorEntranceText.classList.add('errorActive');
    }
}

function goToPiano() {
    errorEntranceText.classList.remove('errorActive')
    window.location.href = "http://127.0.0.1:5500/piano.html"
}

// Entrance email's validation
function validEntranceEmail() {
    let acc = false;
    const arr = JSON.parse(localStorage.getItem('users'))
    arr.filter(el => {
        if (el.user.email == emailEntranceInput.value) {
            acc = true;
        }
    })

    if (emailEntranceInput.value != '' && acc == true) {
        return acc
    } else {
        acc = false;
    }

    return acc
}

// Entrance password's validation
function validEntrancePass() {
    let acc = false;
    const arr = JSON.parse(localStorage.getItem('users'))
    arr.filter(el => {
        if (el.user.password == passwordEntranceInput.value) {
            acc = true;
        }
    })

    if (passwordEntranceInput.value != '' && acc == true) {
        return acc
    } else {
        acc = false;
    }

    return acc
}

export { checkForm, switchToPiano, willVisible } 
