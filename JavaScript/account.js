import { removeListeners } from './piano.js';
import { addListeners } from './piano.js';
//----------------------------   Personal user's account  -------------------------------

const root5 = document.getElementById('root5');

// Account's wrapper
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

// --------- Account's icon ------------------
const usersIcon = document.createElement('div');
usersIcon.classList.add('usersIcon');

const avatar = document.createElement('img');
avatar.classList.add('avatar');
avatar.setAttribute('src', getAvatar());
function getAvatar() {
    const acc = JSON.parse(localStorage.getItem('user'));
    const src = acc.user.avatar;
    return src
}

// -----------  Account's links ---------------
const linksWrap = document.createElement('div'); 
linksWrap.classList.add('linksWrap');

// Open and close mark
const openMark = document.createElement('div');
openMark.classList.add('openMark');
openMark.onclick = () => {
    imgMark.classList.toggle('imgMarkActive');
    linksWrap.classList.toggle('linksWrapActive');
}

const imgMark = document.createElement('img');
imgMark.classList.add('imgMark');
imgMark.setAttribute('src', '../png/closeSVG.svg');

openMark.append(imgMark);

// Say hello text
const welcome = document.createElement('div');
welcome.classList.add('welcome');
function sayWelcome() {
    const name = JSON.parse(localStorage.getItem('user')).user.name
    welcome.append(`Welcome ${name}`)
}
sayWelcome()

// ----------------  Change's buttons  -------------------------------

// Change avatar
const link1 = document.createElement('button');
link1.classList.add('links', 'link1');
link1.append('Change Avatar');
link1.onclick = () => {
    link1.setAttribute('disabled', 'disabled');
    link1.classList.toggle('link1Act');
    icons.append(setUser());
    icons.removeChild(icons.firstChild);
    iconsWrapper.style.left = `-1084px`;
    document.addEventListener('click', (e) => {
        for (let i of icons.childNodes) {

            if (e.path[0] == i) {
                avatar.setAttribute('src', `${i.src}`);
                iconsWrapper.style.left = `152px`;
                const acc1 = JSON.parse(localStorage.getItem('users'));
                const acc2 = JSON.parse(localStorage.getItem('user'));

                for (let j of acc1) {

                    if (j.user.email == acc2.user.email) {
                        acc2.user.avatar = i.src;
                        j.user.avatar = i.src;
                    }
                }
                localStorage.setItem('users', JSON.stringify(acc1));
                localStorage.setItem('user', JSON.stringify(acc2));
                while (icons.childNodes.length != 0) {
                    icons.removeChild(icons.firstChild);
                }
                document.removeEventListener('click', (e));
                link1.removeAttribute('disabled');
                link1.classList.toggle('link1Act');
            }
        }
    })
}

// Change name
const link2 = document.createElement('div');
link2.classList.add('links', 'link2');
link2.append('Change Name');
const patForLink2 = '[A-Za-zА-Яа-яЁё-]{1,}';
link2.onclick = () => {
    openMark.style.display = 'none';
    changeNameOrPass('name', patForLink2);
}

// Change pass
const link3 = document.createElement('div');
link3.classList.add('links', 'link3');
link3.append('Change Password');
const patForLink3 = '[0-9A-Za-z]{6,20}';
link3.onclick = () => {
    openMark.style.display = 'none';
    changeNameOrPass('password', patForLink3);
}


// Avatar's Icons
const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('iconsWrapper');
const icons = document.createElement('div');
icons.classList.add('icons');

iconsWrapper.append(icons);


// Luggage
usersIcon.append(avatar);
linksWrap.append(openMark, welcome, link1, link2, link3);
wrapper.append(usersIcon, linksWrap, iconsWrapper);
root5.append(wrapper);



async function setUser() {
    const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
    const resolve = await response.json();

    for (let i of resolve.results) {
            const img = document.createElement('img');
            img.setAttribute('src', `${i.image}`);
            img.classList.add('avatar', 'icon');
            icons.append(img);
    }
}

// Change name's or password's function 

function changeNameOrPass(type, pattern) {
    removeListeners()
    const stor1 = JSON.parse(localStorage.getItem('users'));
    const stor2 = JSON.parse(localStorage.getItem('user'));
    const wrap = document.createElement('form');
    wrap.classList.add('linksWrap', 'wrapName');
    wrap.setAttribute('onsubmit', 'return false');

    const nameImgClose = document.createElement('img');
    nameImgClose.setAttribute('src', '../png/x_cross_delete_remove_icon_144023.svg')
    nameImgClose.classList.add('nameImgClose');
    nameImgClose.onclick = () => {
        wrap.classList.toggle('wrapNameActive');
        setTimeout(() => wrap.remove(wrap), 300);
        openMark.style.display = 'block';
        addListeners()
    }

    const case1 = document.createElement('input');
    case1.setAttribute('type', 'text');
    case1.setAttribute('placeholder', `Type your ${type}`)
    case1.setAttribute('required', 'true');
    case1.setAttribute('pattern', `${pattern}`);
    case1.classList.add('links', 'nameCases');

    const textErr1 = document.createElement('div');
    textErr1.classList.add('textErr');
    textErr1.append(`Invalid ${type}`)

    const case2 = document.createElement('input');
    case2.setAttribute('type', 'text');
    case2.setAttribute('placeholder', `Type next ${type}`)
    case2.setAttribute('required', 'true');
    case2.setAttribute('pattern', `${pattern}`);
    case2.classList.add('links', 'nameCases');

    const textErr2 = document.createElement('div');
    textErr2.classList.add('textErr');
    textErr2.append(`Invalid ${type}`)

    const caseButt = document.createElement('input');
    caseButt.setAttribute('type', 'submit');
    caseButt.setAttribute('value', 'Change');
    caseButt.classList.add('links', 'caseButt');
    caseButt.onclick = () => {
        textErr1.style.opacity = `0`;
        textErr2.style.opacity = `0`;
            if (case1.value != '' || pattern.test(case1.value)) {
                if (case1.value == stor2.user.name || case1.value == stor2.user.password) {
                    let pat;
                    if (type == 'name') {
                        pat = /^[A-Za-zА-Яа-яЁё-]{1,}$/;
                    } else {pat = /[0-9A-Za-z]{6,20}/}
                    if (case2.value != '' && pat.test(case2.value)) {
                        if (type == 'name') {
                            for (let el of stor1) {
                                if (el.user.name == stor2.user.name) {
                                    el.user.name = case2.value;
                                }
                            }
                            stor2.user.name = case2.value;
                        } else {
                            for (let el of stor1) {
                                if (el.user.password == stor2.user.password) {
                                    el.user.password = case2.value;
                                }
                            }
                            stor2.user.password = case2.value;
                        }
                        localStorage.setItem('users', JSON.stringify(stor1));
                        localStorage.setItem('user', JSON.stringify(stor2));
                        if (type == 'name') {
                            welcome.textContent = '';
                            sayWelcome()
                        }
                        wrap.classList.toggle('wrapNameActive');
                        setTimeout(() => wrap.remove(wrap), 300);
                        openMark.style.display = 'block';
                        addListeners()
                    } else {textErr2.style.opacity = `1`}
                } else {textErr1.style.opacity = `1`}
            } else {textErr1.style.opacity = `1`}
    }

    wrap.append(nameImgClose, case1, textErr1, case2, textErr2, caseButt);
    linksWrap.append(wrap);
    setTimeout(() => wrap.classList.toggle('wrapNameActive'), 100)
}

