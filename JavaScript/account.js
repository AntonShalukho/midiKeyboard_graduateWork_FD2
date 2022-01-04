
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

// Change's buttons
const link1 = document.createElement('div');
link1.classList.add('links', 'link1');
link1.append('Change Avatar');
link1.onclick = () => {
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
                document.removeEventListener('click', (e))
            }
        }
    })
}


const link2 = document.createElement('div');
link2.classList.add('links', 'link2');
link2.append('Change Name');

const link3 = document.createElement('div');
link3.classList.add('links', 'link3');
link3.append('Change Password');

const link4 = document.createElement('div');
link4.classList.add('links', 'link4');
link4.append('Instructions');

// Avatar's Icons
const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('iconsWrapper');
const icons = document.createElement('div');
icons.classList.add('icons');

iconsWrapper.append(icons);


// Luggage
usersIcon.append(avatar);
linksWrap.append(openMark, welcome, link1, link2, link3, link4);
wrapper.append(usersIcon, linksWrap, iconsWrapper);
root5.append(wrapper);

// let response = fetch('https://rickandmortyapi.com/api/character', {method: 'GET'}).then(a => a.json()).then(a => console.dir(a)).catch(a => console.log('error'));

// async function getImage() {
//     const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
//     const resolve = await response.json();
//     for (let i of resolve.results) {
//         if (resolve.results[18] != i) {
//             const img = document.createElement('img');
//             img.setAttribute('src', `${i.image}`)
//             root2.append(img)
//         }
//     }
// }

// getImage()

// fetch('https://rickandmortyapi.com/api/character', {method: 'GET'})
// .then(a => a.json())
// .then(a => {
//     console.log(a)
//     avatar.setAttribute('src', `${a.results[18].image}`);
// }).catch(a => console.info(`Avatar's src: Error!`))

async function setUser() {
    // fetch('https://rickandmortyapi.com/api/character', {method: 'GET'})
    // .then(a => a.json())
    // .then(a => {
    //     console.log(a.results)
    // }).catch(a => console.info(`Avatar's src: Error!`))
    const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
    const resolve = await response.json();
    // const box = document.createElement('div');
    for (let i of resolve.results) {
        if (resolve.results[18] != i) {
            const img = document.createElement('img');
            img.setAttribute('src', `${i.image}`);
            img.classList.add('avatar', 'icon');
            icons.append(img);
        }
    }
    // console.log(box)
    // return box
}