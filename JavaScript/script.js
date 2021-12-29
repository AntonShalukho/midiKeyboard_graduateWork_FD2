import { root2 } from './registration.js';

//    -------------   First title page    -----------------
 
/* 
    Site
*/

const root = document.getElementById('root1');

/*
    Clock
*/ 

const clock = document.createElement('div');
clock.classList.add('clock')

/*
    Background
*/

const pictureFirst = document.createElement('div');
pictureFirst.classList.add('picture');

/*
    Titles
*/

const pictureFirstContent1 = document.createElement('div');
pictureFirstContent1.classList.add('pictureContent', 'pictureFirstContent1');
pictureFirstContent1.append(`Хочешь научиться игре на пианино?`);
pictureFirst.append(pictureFirstContent1);

const pictureFirstContent2 = document.createElement('div');
pictureFirstContent2.classList.add('pictureContent', 'pictureFirstContent2');
pictureFirstContent2.append(`С нами ты сможешь достич мечты!`);
pictureFirst.append(pictureFirstContent2);

/*
    Registration
*/

const pictureFirstContent3 = document.createElement('div');
pictureFirstContent3.classList.add('pictureContent', 'pictureFirstContent3');

const buttonWrapper = document.createElement('div')
buttonWrapper.classList.add('buttonWrapper')

const buttonEnter = document.createElement('div');
buttonEnter.classList.add('button', 'buttonEnter');
buttonEnter.append('Entrance')
buttonEnter.onmousedown = () => {buttonEnter.style.cssText += `box-shadow: 0px 5px 8px #795548bf; top: 0px;`};
buttonEnter.onmouseup = () => {buttonEnter.style.cssText += `box-shadow: 0px 10px 13px #795548bf; top: -5px;`};
buttonEnter.onmouseover = () => {buttonEnter.style.cssText += `box-shadow: 0px 10px 13px #795548bf; top: -5px;`};
buttonEnter.onmouseleave = () => {buttonEnter.style.cssText += `box-shadow: none; top: 0px;`};

const buttonLogIn = document.createElement('div');
buttonLogIn.classList.add('button', 'buttonLogIn');
buttonLogIn.append('Log in')
buttonLogIn.onmousedown = () => {buttonLogIn.style.cssText += `box-shadow: 0px 5px 8px #795548bf; top: 0px;`};
buttonLogIn.onmouseup = () => {
    buttonLogIn.style.cssText += `box-shadow: 0px 10px 13px #795548bf; top: -5px;`;
    pictureFirstShadow.style.zIndex = '10';
    root2.style.display = 'block'
};
buttonLogIn.onmouseover = () => {buttonLogIn.style.cssText += `box-shadow: 0px 10px 13px #795548bf; top: -5px;`};
buttonLogIn.onmouseleave = () => {buttonLogIn.style.cssText += `box-shadow: none; top: 0px;`};

buttonWrapper.append(buttonEnter, buttonLogIn)
pictureFirstContent3.append(buttonWrapper)
pictureFirst.append(pictureFirstContent3);

// pictureFirstContent3.setAttribute('href', './piano.html')

/*
    background shadow
*/

const pictureFirstShadow = document.createElement('div');
pictureFirstShadow.classList.add('pictureShadow');
pictureFirst.append(pictureFirstShadow);

/*
    
*/

root.append(clock);
root.append(pictureFirst);

/*
    Titles text enter
*/

setTimeout((() => pictureFirstContent1.style.left = `30%`), 500);
setTimeout((() => pictureFirstContent2.style.left = `30.5%`), 1500);
setTimeout((() => pictureFirstContent3.style.left = `34%`), 2500);


 //      -------------    Clock's  function     --------------


function giveTime() {
    
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    };

    if (min < 10) {
        min = '0' + min;
    };

    if (sec < 10) {
        sec = '0' + sec
    }

    clock.textContent = `${hour} : ${min} : ${sec}`;
    
}
giveTime()
setInterval(giveTime, 1000)

export { pictureFirstShadow }