const body = document.getElementById('body');

body.style.cssText = `
    margin: auto;
    background: url(./png/png5.jpg);
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 70px;
`;

const bodyShadow = document.createElement('div');

bodyShadow.style.cssText = `
    background-color: rgb(0 0 0 / 68%);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

/*
         Шаблон с нотами песен
*/

const note = document.createElement('div');
const title = document.createElement('div');
const songNames = document.createElement('div');
const song1 = document.createElement('div');
const song2 = document.createElement('div');
const song1Text = document.createElement('div');
const song2Text = document.createElement('div');
const butt = document.createElement('div');
const buttBack = document.createElement('div');
const buttPlay = document.createElement('div');
const song1TextContent = `S   H   H   F   D   D   D   D F / 3 раза`;
const song2TextContent = `G  D D  G  D D  G F D S A  H  K H  G  D D  G F D S A H  K H  G  D D  G F D S A`;

note.style.cssText = `
    width: 70%;
    height: 40%;
    background-color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
`;

title.style.cssText = `font-size: 24px;`;
song1.style.cssText = `font-size: 20px; cursor: pointer`;
song2.style.cssText = `font-size: 20px; cursor: pointer`;
song1Text.style.cssText = `font-size: 24px; display: none; justify-self: center; align-self: center;`;
song2Text.style.cssText = `font-size: 24px; display: none; justify-self: center; align-self: center;`;
butt.style.cssText = `display: none; flex-direction: row; justify-content: end; align-items: end;`;
buttBack.style.cssText = `width: 8%; height: 50%; border: 1px solid black; display: flex; justify-content: center; align-items: center; 
                        cursor: pointer; margin: 1%; justify-self: end; align-self: end;`;
buttPlay.style.cssText = `width: 12%; height: 50%; border: 1px solid black; display: flex; justify-content: center; align-items: center; 
                        cursor: pointer; margin: 1%; justify-self: end; align-self: end;`;
title.textContent = `Просто выбери что понравилось:`;
song1.textContent = `In the end(Linkin park),`;
song2.textContent = `Ёлочка,`;
song1Text.textContent = `${song1TextContent}`;
song2Text.textContent = `${song2TextContent}`;
buttBack.textContent = `Назад`
buttPlay.textContent = `Проиграть`

/* 
            Клавиши пианино  
*/

const piano = document.createElement('div');
const keyDo1 = document.createElement('div');
const keyRe1 = document.createElement('div');
const keyMi1 = document.createElement('div');
const keyFa1 = document.createElement('div');
const keySol1 = document.createElement('div');
const keyLya1 = document.createElement('div');
const keySi1 = document.createElement('div');
const keyDo2 = document.createElement('div');
const keyRe2 = document.createElement('div');
const keyMi2 = document.createElement('div');
const keyFa2 = document.createElement('div');
const keySol2 = document.createElement('div');
const keyLya2 = document.createElement('div');
const keySi2 = document.createElement('div');
const keyDo3 = document.createElement('div');
const key = `
    width: 6.66%;
    height: 90%;
    border-radius: 5%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: white;
`;

keyDo1.style.cssText = `${key}`;
keyRe1.style.cssText = `${key}`;
keyMi1.style.cssText = `${key}`;
keyFa1.style.cssText = `${key}`;
keySol1.style.cssText = `${key}`;
keyLya1.style.cssText = `${key}`;
keySi1.style.cssText = `${key}`;
keyDo2.style.cssText = `${key}`;
keyRe2.style.cssText = `${key}`;
keyMi2.style.cssText = `${key}`;
keyFa2.style.cssText = `${key}`;
keySol2.style.cssText = `${key}`;
keyLya2.style.cssText = `${key}`;
keySi2.style.cssText = `${key}`;
keyDo3.style.cssText = `${key}`;

piano.style.cssText = `
    width: 70%;
    height: 40%;
    z-index: 2;
    display: flex;
    flex-direction: row;
    position: relative;
`;

keyDo1.innerHTML = `<strong>A</strong> (До)`;
keyRe1.innerHTML = `<strong>S</strong> (Ре)`;
keyMi1.innerHTML = `<strong>D</strong> (Ми)`;
keyFa1.innerHTML = `<strong>F</strong> (Фа)`;
keySol1.innerHTML = `<strong>G</strong> (Соль)`;
keyLya1.innerHTML = `<strong>H</strong> (Ля)`;
keySi1.innerHTML = `<strong>J</strong> (Си)`;
keyDo2.innerHTML = `<strong>K</strong> (До)`;
keyRe2.innerHTML = `<strong>L</strong> (Ре)`;
keyMi2.innerHTML = `<strong>:</strong> (Ми)`;
keyFa2.innerHTML = `<strong>"</strong> (Фа)`;
keySol2.innerHTML = `<strong>|</strong> (Соль)`;
keyLya2.innerHTML = `<strong>4</strong> (Ля)`;
keySi2.innerHTML = `<strong>5</strong> (Си)`;
keyDo3.innerHTML = `<strong>6</strong> (До)`;

body.insertAdjacentElement('afterbegin', bodyShadow);
body.insertAdjacentElement('beforeend', note);
body.insertAdjacentElement('beforeend', piano);
note.insertAdjacentElement('beforeend', title);
note.insertAdjacentElement('beforeend', songNames);
songNames.insertAdjacentElement('beforeend', song1);
songNames.insertAdjacentElement('beforeend', song2);
note.insertAdjacentElement('beforeend', song1Text);
note.insertAdjacentElement('beforeend', song2Text);
note.insertAdjacentElement('beforeend', butt);
butt.insertAdjacentElement('beforeend', buttBack);
butt.insertAdjacentElement('beforeend', buttPlay);
piano.insertAdjacentElement('beforeend', keyDo1);
piano.insertAdjacentElement('beforeend', keyRe1);
piano.insertAdjacentElement('beforeend', keyMi1);
piano.insertAdjacentElement('beforeend', keyFa1);
piano.insertAdjacentElement('beforeend', keySol1);
piano.insertAdjacentElement('beforeend', keyLya1);
piano.insertAdjacentElement('beforeend', keySi1);
piano.insertAdjacentElement('beforeend', keyDo2);
piano.insertAdjacentElement('beforeend', keyRe2);
piano.insertAdjacentElement('beforeend', keyMi2);
piano.insertAdjacentElement('beforeend', keyFa2);
piano.insertAdjacentElement('beforeend', keySol2);
piano.insertAdjacentElement('beforeend', keyLya2);
piano.insertAdjacentElement('beforeend', keySi2);
piano.insertAdjacentElement('beforeend', keyDo3);

const audioDo1 = new Audio('./audio/right_piano/do1.mp3');
const audioBlackKeyC1 = new Audio('./audio/right_piano/do1D.mp3'); 
const audioRe1 = new Audio('./audio/right_piano/re1.mp3');
const audioBlackKeyD1 = new Audio('./audio/right_piano/re1D.mp3'); 
const audioMi1 = new Audio('./audio/right_piano/mi1.mp3');
const audioFa1 = new Audio('./audio/right_piano/fa1.mp3');
const audioBlackKeyF1 = new Audio('./audio/right_piano/fa1D.mp3'); 
const audioSol1 = new Audio('./audio/right_piano/sol1.mp3');
const audioBlackKeyG1 = new Audio('./audio/right_piano/sol1D.mp3'); 
const audioLya1 = new Audio('./audio/right_piano/lya1.mp3');
const audioBlackKeyA1 = new Audio('./audio/right_piano/lya1D.mp3'); 
const audioSi1 = new Audio('./audio/right_piano/si1.mp3');
const audioDo2 = new Audio('./audio/right_piano/do2.mp3');
const audioBlackKeyC2 = new Audio('./audio/right_piano/do2D.mp3'); 
const audioRe2 = new Audio('./audio/right_piano/re2.mp3');
const audioBlackKeyD2 = new Audio('./audio/right_piano/re2D.mp3'); 
const audioMi2 = new Audio('./audio/right_piano/mi2.mp3');
const audioFa2 = new Audio('./audio/right_piano/fa2.mp3');
const audioBlackKeyF2 = new Audio('./audio/right_piano/fa2D.mp3'); 
const audioSol2 = new Audio('./audio/right_piano/sol2.mp3');
const audioBlackKeyG2 = new Audio('./audio/right_piano/sol2D.mp3'); 
const audioLya2 = new Audio('./audio/right_piano/lya2.mp3');
const audioBlackKeyA2 = new Audio('./audio/right_piano/lya2D.mp3'); 
const audioSi2 = new Audio('./audio/right_piano/si2.mp3');
const audioDo3 = new Audio('./audio/right_piano/do3.mp3');

const blackKeyC1 = document.createElement('div'); 
const blackKeyD1 = document.createElement('div'); 
const blackKeyF1 = document.createElement('div'); 
const blackKeyG1 = document.createElement('div'); 
const blackKeyA1 = document.createElement('div'); 
const blackKeyC2 = document.createElement('div'); 
const blackKeyD2 = document.createElement('div'); 
const blackKeyF2 = document.createElement('div'); 
const blackKeyG2 = document.createElement('div'); 
const blackKeyA2 = document.createElement('div'); 
const blackKey = `background-color: black; color: white; border-bottom: solid 0.8rem black; border-left: solid 0.3rem black;
                border-right: solid 0rem black; position: absolute; width: 4%; height: 50%; top: 0; display: flex;
                justify-content: center; align-items: end; transition-duration: 0.05s; font-size: 10px;`;

blackKeyC1.style.cssText = `${blackKey} left: 4%;`; 
blackKeyD1.style.cssText = `${blackKey} left: 10.8%;`; 
blackKeyF1.style.cssText = `${blackKey} left: 24.1%;`; 
blackKeyG1.style.cssText = `${blackKey} left: 30.8%;`; 
blackKeyA1.style.cssText = `${blackKey} left: 37.5%;`; 
blackKeyC2.style.cssText = `${blackKey} left: 50.9%;`; 
blackKeyD2.style.cssText = `${blackKey} left: 57.6%;`; 
blackKeyF2.style.cssText = `${blackKey} left: 71%;`; 
blackKeyG2.style.cssText = `${blackKey} left: 77.7%;`; 
blackKeyA2.style.cssText = `${blackKey} left: 84.4%;`; 

blackKeyC1.innerHTML = `<strong>W</strong>(До#)`; 
blackKeyD1.innerHTML = `<strong>E</strong>(Ре#)`;
blackKeyF1.innerHTML = `<strong>T</strong>(Фа#)`;
blackKeyG1.innerHTML = `<strong>Y</strong>(Соль#)`; 
blackKeyA1.innerHTML = `<strong>U</strong>(Ля#)`; 
blackKeyC2.innerHTML = `<strong>O</strong>(До#)`; 
blackKeyD2.innerHTML = `<strong>P</strong>(Ре#)`; 
blackKeyF2.innerHTML = `<strong>}</strong>(Фа#)`; 
blackKeyG2.innerHTML = `<strong>7</strong>(Соль#)`; 
blackKeyA2.innerHTML = `<strong>8</strong>(Ля#)`;

piano.insertAdjacentElement('beforeend', blackKeyC1);
piano.insertAdjacentElement('beforeend', blackKeyD1);
piano.insertAdjacentElement('beforeend', blackKeyF1);
piano.insertAdjacentElement('beforeend', blackKeyG1);
piano.insertAdjacentElement('beforeend', blackKeyA1);
piano.insertAdjacentElement('beforeend', blackKeyC2);
piano.insertAdjacentElement('beforeend', blackKeyD2);
piano.insertAdjacentElement('beforeend', blackKeyF2);
piano.insertAdjacentElement('beforeend', blackKeyG2);
piano.insertAdjacentElement('beforeend', blackKeyA2);

const whiteKeys = {'KeyA': {keyCode: keyDo1, audio: audioDo1, keyName: 'A'},
                    'KeyS': {keyCode: keyRe1, audio: audioRe1, keyName: 'S'},
                    'KeyD': {keyCode: keyMi1, audio: audioMi1, keyName: 'D'}, 
                    'KeyF': {keyCode: keyFa1, audio: audioFa1, keyName: 'F'}, 
                    'KeyG': {keyCode: keySol1, audio: audioSol1, keyName: 'G'}, 
                    'KeyH': {keyCode: keyLya1, audio: audioLya1, keyName: 'H'}, 
                    'KeyJ': {keyCode: keySi1, audio: audioSi1, keyName: 'J'}, 
                    'KeyK': {keyCode: keyDo2, audio: audioDo2, keyName: 'K'}, 
                    'KeyL': {keyCode: keyRe2, audio: audioRe2, keyName: 'L'}, 
                    'Semicolon': {keyCode: keyMi2, audio: audioMi2, keyName: 'Semicolon'}, 
                    'Quote': {keyCode: keyFa2, audio: audioFa2, keyName: 'Quote'}, 
                    'Backslash': {keyCode: keySol2, audio: audioSol2, keyName: 'Backslash'}, 
                    'Numpad4': {keyCode: keyLya2, audio: audioLya2, keyName: 'Numpad4'}, 
                    'Numpad5': {keyCode: keySi2, audio: audioSi2, keyName: 'Numpad5'}, 
                    'Numpad6': {keyCode: keyDo3, audio: audioDo3, keyName: 'Numpad6'}
};

const blackKeys = {'KeyW': {keyCode: blackKeyC1, audio: audioBlackKeyC1, keyName: 'W'}, 
                    'KeyE': {keyCode: blackKeyD1, audio: audioBlackKeyD1, keyName: 'E'}, 
                    'KeyT': {keyCode: blackKeyF1, audio: audioBlackKeyF1, keyName: 'T'}, 
                    'KeyY': {keyCode: blackKeyG1, audio: audioBlackKeyG1, keyName: 'Y'}, 
                    'KeyU': {keyCode: blackKeyA1, audio: audioBlackKeyA1, keyName: 'U'}, 
                    'KeyO': {keyCode: blackKeyC2, audio: audioBlackKeyC2, keyName: 'O'}, 
                    'KeyP': {keyCode: blackKeyD2, audio: audioBlackKeyD2, keyName: 'P'}, 
                    'BracketRight': {keyCode: blackKeyF2, audio: audioBlackKeyF2, keyName: 'BracketRight'}, 
                    'Numpad7': {keyCode: blackKeyG2, audio: audioBlackKeyG2, keyName: 'Numpad7'}, 
                    'Numpad8': {keyCode: blackKeyA2, audio: audioBlackKeyA2, keyName: 'Numpad8'}
};


addEventListener('keydown', (event) => {
    forWhite:
    for (let i = 0; i < Object.keys(whiteKeys).length; i++) {
        if (Object.keys(whiteKeys)[i] == event.code) {
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.backgroundColor = `bisque`;
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.border = `3px solid black`;
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.height = `91%`; 
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.width = `6.36%`; 
            whiteKeys[Object.keys(whiteKeys)[i]].audio.play(); 
            break forWhite
        }
    }
    forBlack:
    for (let i = 0; i < Object.keys(blackKeys).length; i++) {
        if (Object.keys(blackKeys)[i] == event.code) {
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.borderBottom = `solid 0rem black`;
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.borderLeft = `solid 0rem black`;
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.height = `53.5%`; 
            blackKeys[Object.keys(blackKeys)[i]].audio.play(); 
            break forBlack
        }
    }
})

// addEventListener('mousedown', (event) => {
//     forWhite:
//     for (let i = 0; i < Object.keys(whiteKeys).length; i++) {
//         if (Object.keys(whiteKeys[i]) == event.code) {
//             whiteKeys[i][event.code].keyCode.style.backgroundColor = `bisque`;
//             whiteKeys[i][event.code].keyCode.style.border = `3px solid black`;
//             whiteKeys[i][event.code].keyCode.style.height = `91%`; 
//             whiteKeys[i][event.code].keyCode.style.width = `6.36%`; 
//             whiteKeys[i][event.code].audio.play(); 
//             break forWhite
//         }
//     }
//     forBlack:
//     for (let i = 0; i < Object.keys(blackKeys).length; i++) {
//         if (Object.keys(blackKeys[i]) == event.code) {
//             blackKeys[i][event.code].keyCode.style.borderBottom = `solid 0rem black`;
//             blackKeys[i][event.code].keyCode.style.borderLeft = `solid 0rem black`;
//             blackKeys[i][event.code].keyCode.style.height = `53.5%`; 
//             blackKeys[i][event.code].audio.play(); 
//             break forBlack
//         }
//     }
// });

addEventListener('keyup', (event) => {

    forWhite:
    for (let i = 0; i < Object.keys(whiteKeys).length; i++) {
        if (Object.keys(whiteKeys)[i] == event.code) {
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.backgroundColor = `white`;
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.border = `1px solid black`;
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.height = `90%`; 
            whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.width = `6.66%`; 
            whiteKeys[Object.keys(whiteKeys)[i]].audio.load(); 
            break forWhite
        }
    }
    forBlack:
    for (let i = 0; i < Object.keys(blackKeys).length; i++) {
        if (Object.keys(blackKeys)[i] == event.code) {
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.borderBottom = `solid 0.8rem black`;
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.borderLeft = `solid 0.3rem black`;
            blackKeys[Object.keys(blackKeys)[i]].keyCode.style.height = `50%`; 
            blackKeys[Object.keys(blackKeys)[i]].audio.load(); 
            break forBlack
        }
    }
})

// addEventListener('mouseup', (event) => {

//     forWhite:
//     for (let i = 0; i < Object.keys(whiteKeys).length; i++) {
//         if (Object.keys(whiteKeys[i]) == event.code) {
//             whiteKeys[i][event.code].keyCode.style.backgroundColor = `white`;
//             whiteKeys[i][event.code].keyCode.style.border = `1px solid black`;
//             whiteKeys[i][event.code].keyCode.style.height = `90%`; 
//             whiteKeys[i][event.code].keyCode.style.width = `6.66%`; 
//             whiteKeys[i][event.code].audio.load(); 
//             break forWhite
//         }
//     }
//     forBlack:
//     for (let i = 0; i < Object.keys(blackKeys).length; i++) {
//         if (Object.keys(blackKeys[i]) == event.code) {
//             blackKeys[i][event.code].keyCode.style.borderBottom = `solid 0.8rem black`;
//             blackKeys[i][event.code].keyCode.style.borderLeft = `solid 0.3rem black`;
//             blackKeys[i][event.code].keyCode.style.height = `50%`; 
//             blackKeys[i][event.code].audio.load(); 
//             break forBlack
//         }
//     }
// })

song1.onclick = () => {
    title.style.display = 'none'; 
    songNames.style.display = 'none'; 
    song1Text.style.display = 'flex';
    butt.style.display = 'flex'
};
song2.onclick = () => {
    title.style.display = 'none'; 
    songNames.style.display = 'none'; 
    song2Text.style.display = 'flex';
    butt.style.display = 'flex'
};
buttBack.onclick = () => {
    title.style.display = 'block'; 
    songNames.style.display = 'block';
    song1Text.style.display = 'none'; 
    song2Text.style.display = 'none'; 
    butt.style.display = 'none'
};
buttPlay.onclick = () => {
    if (song1Text.style.display == 'flex') {
        playSong(song1TextContent)
    }
    if (song2Text.style.display == 'flex') {
        playSong(song2TextContent)
    }
}

function playSong(song) {
    let acc = song.split(' ');
    console.log(acc);
    let time1 = 0;
    let time2 = 700;

    acc.forEach(item => {
        console.log(Object.keys(whiteKeys).length)
        
        for (let i = 0; i < Object.keys(whiteKeys).length; i++) {
            console.log(item == whiteKeys[Object.keys(whiteKeys)[1]].keyName)
            if (item == whiteKeys[Object.keys(whiteKeys)[i]].keyName) {
                setTimeout(() => {
                    whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.backgroundColor = `bisque`;
                    whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.border = `3px solid black`;
                    whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.height = `91%`; 
                    whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.width = `6.36%`; 
                    whiteKeys[Object.keys(whiteKeys)[i]].audio.play();
    
                    setTimeout(() => {
                        whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.backgroundColor = `white`;
                        whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.border = `ipx solid black`;
                        whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.height = `90%`; 
                        whiteKeys[Object.keys(whiteKeys)[i]].keyCode.style.width = `6.66%`; 
                        whiteKeys[Object.keys(whiteKeys)[i]].audio.load();
                    }, `${time2}`)
                }, `${time1}`);
                time1 += 800; 
            }
        }
    })
}




// playSong(song2TextContent);
    // switch (event.code) {
    //     case 'KeyA': {
    //         keyDo1.style.backgroundColor = `red`;
    //         keyDo1.style.border = `3px solid black`;
    //         keyDo1.style.height = `91%`; 
    //         keyDo1.style.width = `6.36%`; 
    //         audioDo1.play(); 
    //         break
    //     };
    //     case 'KeyW': {
    //         blackKeyC1.style.borderBottom = `solid 0rem black`; 
    //         blackKeyC1.style.borderLeft = `solid 0rem black`; 
    //         blackKeyC1.style.height = `53.5%`; 
    //         audioDo2.play(); 
    //         break
    //     };
    //     case 'KeyS': {
    //         keyRe1.style.backgroundColor = `orange`;
    //         keyRe1.style.border = `3px solid black` ;
    //         keyRe1.style.height = `91%`; 
    //         keyRe1.style.width = `6.36%`; 
    //         audioRe1.play(); 
    //         break
    //     };
    //     case 'KeyE': {
    //         blackKeyD1.style.borderBottom = `solid 0rem black`; 
    //         blackKeyD1.style.borderLeft = `solid 0rem black`; 
    //         blackKeyD1.style.height = `53.5%`; 
    //         audioRe1.play(); 
    //         break
    //     };
    //     case 'KeyD': {
    //         keyMi1.style.backgroundColor = `yellow`; 
    //         keyMi1.style.border = `3px solid black` ;
    //         keyMi1.style.height = `91%`; 
    //         keyMi1.style.width = `6.36%`;
    //         audioMi1.play(); 
    //         break
    //     };
    //     case 'KeyF': {
    //         keyFa1.style.backgroundColor = `green`; 
    //         keyFa1.style.border = `3px solid black` ;
    //         keyFa1.style.height = `91%`; 
    //         keyFa1.style.width = `6.36%`;
    //         audioFa1.play(); 
    //         break
    //     };
    //     case 'KeyT': {
    //         blackKeyF1.style.borderBottom = `solid 0rem black`; 
    //         blackKeyF1.style.borderLeft = `solid 0rem black`; 
    //         blackKeyF1.style.height = `53.5%`; 
    //         audioFa1.play(); 
    //         break
    //     };
    //     case 'KeyG': {
    //         keySol1.style.backgroundColor = `blue`; 
    //         keySol1.style.border = `3px solid black` ;
    //         keySol1.style.height = `91%`; 
    //         keySol1.style.width = `6.36%`;
    //         audioSol1.play(); 
    //         break
    //     };
    //     case 'KeyY': {
    //         blackKeyG1.style.borderBottom = `solid 0rem black`; 
    //         blackKeyG1.style.borderLeft = `solid 0rem black`; 
    //         blackKeyG1.style.height = `53.5%`; 
    //         audioSol1.play(); 
    //         break
    //     };
    //     case 'KeyH': {
    //         keyLya1.style.backgroundColor = `indigo`; 
    //         keyLya1.style.border = `3px solid black` ;
    //         keyLya1.style.height = `91%`; 
    //         keyLya1.style.width = `6.36%`;
    //         audioLya1.play(); 
    //         break
    //     };
    //     case 'KeyU': {
    //         blackKeyA1.style.borderBottom = `solid 0rem black`; 
    //         blackKeyA1.style.borderLeft = `solid 0rem black`; 
    //         blackKeyA1.style.height = `53.5%`;
    //         audioLya1.play(); 
    //         break
    //     };
    //     case 'KeyJ': {
    //         keySi1.style.backgroundColor = `violet`; 
    //         keySi1.style.border = `3px solid black` ;
    //         keySi1.style.height = `91%`; 
    //         keySi1.style.width = `6.36%`;
    //         audioSi1.play(); 
    //         break
    //     };
    //     case 'KeyK': {
    //         keyDo2.style.backgroundColor = `red`; 
    //         keyDo2.style.border = `3px solid black` ;
    //         keyDo2.style.height = `91%`; 
    //         keyDo2.style.width = `6.36%`;
    //         audioDo2.play(); 
    //         break
    //     };
    //     case 'KeyO': {
    //         blackKeyC2.style.borderBottom = `solid 0rem black`; 
    //         blackKeyC2.style.borderLeft = `solid 0rem black`; 
    //         blackKeyC2.style.height = `53.5%`;
    //         audioDo2.play(); 
    //         break
    //     };
    //     case 'KeyL': {
    //         keyRe2.style.backgroundColor = `orange`; 
    //         keyRe2.style.border = `3px solid black` ;
    //         keyRe2.style.height = `91%`; 
    //         keyRe2.style.width = `6.36%`;
    //         audioRe2.play(); 
    //         break
    //     };
    //     case 'KeyP': {
    //         blackKeyD2.style.borderBottom = `solid 0rem black`; 
    //         blackKeyD2.style.borderLeft = `solid 0rem black`; 
    //         blackKeyD2.style.height = `53.5%`;
    //         audioRe2.play(); 
    //         break
    //     };
    //     case 'Semicolon': {
    //         keyMi2.style.backgroundColor = `yellow`; 
    //         keyMi2.style.border = `3px solid black` ;
    //         keyMi2.style.height = `91%`; 
    //         keyMi2.style.width = `6.36%`;
    //         audioMi2.play(); 
    //         break
    //     };
    //     case 'Quote': {
    //         keyFa2.style.backgroundColor = `green`; 
    //         keyFa2.style.border = `3px solid black` ;
    //         keyFa2.style.height = `91%`; 
    //         keyFa2.style.width = `6.36%`;
    //         audioFa2.play(); 
    //         break
    //     };
    //     case 'BracketRight': {
    //         blackKeyF2.style.borderBottom = `solid 0rem black`; 
    //         blackKeyF2.style.borderLeft = `solid 0rem black`; 
    //         blackKeyF2.style.height = `53.5%`; 
    //         audioFa2.play(); 
    //         break
    //     };
    //     case 'Backslash': {
    //         keySol2.style.backgroundColor = `blue`; 
    //         keySol2.style.border = `3px solid black` ;
    //         keySol2.style.height = `91%`; 
    //         keySol2.style.width = `6.36%`;
    //         audioSol2.play(); 
    //         break
    //     };
    //     case 'Numpad4': {
    //         keyLya2.style.backgroundColor = `indigo`; 
    //         keyLya2.style.border = `3px solid black` ;
    //         keyLya2.style.height = `91%`; 
    //         keyLya2.style.width = `6.36%`;
    //         audioLya2.play(); 
    //         break
    //     };
    //     case 'Numpad7': {
    //         blackKeyG2.style.borderBottom = `solid 0rem black`; 
    //         blackKeyG2.style.borderLeft = `solid 0rem black`; 
    //         blackKeyG2.style.height = `53.5%`; 
    //         audioLya2.play(); 
    //         break
    //     };
    //     case 'Numpad5': {
    //         keySi2.style.backgroundColor = `violet`; 
    //         keySi2.style.border = `3px solid black` ;
    //         keySi2.style.height = `91%`; 
    //         keySi2.style.width = `6.36%`;
    //         audioSi2.play(); 
    //         break
    //     };
    //     case 'Numpad8': {
    //         blackKeyA2.style.borderBottom = `solid 0rem black`; 
    //         blackKeyA2.style.borderLeft = `solid 0rem black`; 
    //         blackKeyA2.style.height = `53.5%`;
    //         audioSi2.play(); 
    //         break
    //     };
    //     case 'Numpad6': {
    //         keyDo3.style.backgroundColor = `red`; 
    //         keyDo3.style.border = `3px solid black` ;
    //         keyDo3.style.height = `91%`; 
    //         keyDo3.style.width = `6.36%`;
    //         audioDo3.play(); 
    //         break
    //     };
    // }
   

    // switch (event.code) {
    //     case 'KeyA': {
    //         keyDo1.style.backgroundColor = `white`;
    //         keyDo1.style.border = `1px solid black`;
    //         keyDo1.style.height = `90%`;
    //         keyDo1.style.width = `6.66%`;
    //         audioDo1.load(); 
    //         break
    //     };
    //     case 'KeyW': {
    //         blackKeyC1.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyC1.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyC1.style.height = `50%`;
    //         audioDo2.load(); 
    //         break};
    //     case 'KeyS': {
    //         keyRe1.style.backgroundColor = `white`;
    //         keyRe1.style.border = `1px solid black`;
    //         keyRe1.style.height = `90%`;
    //         keyRe1.style.width = `6.66%`; 
    //         audioRe1.load(); 
    //         break
    //     };
    //     case 'KeyE': {
    //         blackKeyD1.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyD1.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyD1.style.height = `50%`; 
    //         audioRe1.load(); 
    //         break
    //     };
    //     case 'KeyD': {
    //         keyMi1.style.backgroundColor = `white`; 
    //         keyMi1.style.border = `1px solid black`;
    //         keyMi1.style.height = `90%`;
    //         keyMi1.style.width = `6.66%`;
    //         audioMi1.load(); 
    //         break
    //     };
    //     case 'KeyF': {
    //         keyFa1.style.backgroundColor = `white`; 
    //         keyFa1.style.border = `1px solid black`;
    //         keyFa1.style.height = `90%`;
    //         keyFa1.style.width = `6.66%`;
    //         audioFa1.load(); 
    //         break
    //     };
    //     case 'KeyT': {
    //         blackKeyF1.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyF1.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyF1.style.height = `50%`; 
    //         audioFa1.load(); 
    //         break
    //     };
    //     case 'KeyG': {
    //         keySol1.style.backgroundColor = `white`; 
    //         keySol1.style.border = `1px solid black`;
    //         keySol1.style.height = `90%`;
    //         keySol1.style.width = `6.66%`;
    //         audioSol1.load(); 
    //         break
    //     };
    //     case 'KeyY': {
    //         blackKeyG1.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyG1.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyG1.style.height = `50%`;
    //         audioSol1.load(); 
    //         break
    //     };
    //     case 'KeyH': {
    //         keyLya1.style.backgroundColor = `white`; 
    //         keyLya1.style.border = `1px solid black`;
    //         keyLya1.style.height = `90%`;
    //         keyLya1.style.width = `6.66%`;
    //         audioLya1.load(); 
    //         break
    //     };
    //     case 'KeyU': {
    //         blackKeyA1.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyA1.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyA1.style.height = `50%`;
    //         audioLya1.load(); 
    //         break
    //     };
    //     case 'KeyJ': {
    //         keySi1.style.backgroundColor = `white`; 
    //         keySi1.style.border = `1px solid black`;
    //         keySi1.style.height = `90%`;
    //         keySi1.style.width = `6.66%`;
    //         audioSi1.load(); 
    //         break
    //     };
    //     case 'KeyK': {
    //         keyDo2.style.backgroundColor = `white`; 
    //         keyDo2.style.border = `1px solid black`;
    //         keyDo2.style.height = `90%`;
    //         keyDo2.style.width = `6.66%`;
    //         audioDo2.load(); 
    //         break
    //     };
    //     case 'KeyO': {
    //         blackKeyC2.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyC2.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyC2.style.height = `50%`;
    //         audioDo2.load(); 
    //         break
    //     };
    //     case 'KeyL': {
    //         keyRe2.style.backgroundColor = `white`; 
    //         keyRe2.style.border = `1px solid black`;
    //         keyRe2.style.height = `90%`;
    //         keyRe2.style.width = `6.66%`;
    //         audioRe2.load(); 
    //         break
    //     };
    //     case 'KeyP': {
    //         blackKeyD2.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyD2.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyD2.style.height = `50%`; 
    //         audioRe2.load(); 
    //         break
    //     };
    //     case 'Semicolon': {
    //         keyMi2.style.backgroundColor = `white`; 
    //         keyMi2.style.border = `1px solid black`;
    //         keyMi2.style.height = `90%`;
    //         keyMi2.style.width = `6.66%`;
    //         audioMi2.load(); 
    //         break
    //     };
    //     case 'Quote': {
    //         keyFa2.style.backgroundColor = `white`; 
    //         keyFa2.style.border = `1px solid black`;
    //         keyFa2.style.height = `90%`;
    //         keyFa2.style.width = `6.66%`;
    //         audioFa2.load(); 
    //         break
    //     };
    //     case 'BracketRight': {
    //         blackKeyF2.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyF2.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyF2.style.height = `50%`; 
    //         audioFa2.load(); 
    //         break
    //     };
    //     case 'Backslash': {
    //         keySol2.style.backgroundColor = `white`;
    //         keySol2.style.border = `1px solid black`;
    //         keySol2.style.height = `90%`;
    //         keySol2.style.width = `6.66%`;
    //         audioSol2.load(); 
    //         break
    //     };
    //     case 'Numpad4': {
    //         keyLya2.style.backgroundColor = `white`; 
    //         keyLya2.style.border = `1px solid black`;
    //         keyLya2.style.height = `90%`;
    //         keyLya2.style.width = `6.66%`;
    //         audioLya2.load(); 
    //         break
    //     };
    //     case 'Numpad7': {
    //         blackKeyG2.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyG2.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyG2.style.height = `50%`;
    //         audioLya2.load(); 
    //         break
    //     };
    //     case 'Numpad5': {
    //         keySi2.style.backgroundColor = `white`; 
    //         keySi2.style.border = `1px solid black`;
    //         keySi2.style.height = `90%`;
    //         keySi2.style.width = `6.66%`;
    //         audioSi2.load(); 
    //         break
    //     };
    //     case 'Numpad8': {
    //         blackKeyA2.style.borderBottom = `solid 0.8rem black`; 
    //         blackKeyA2.style.borderLeft = `solid 0.3rem black`; 
    //         blackKeyA2.style.height = `50%`;
    //         audioSi2.load(); 
    //         break
    //     };
    //     case 'Numpad6': {
    //         keyDo3.style.backgroundColor = `white`; 
    //         keyDo3.style.border = `1px solid black`;
    //         keyDo3.style.height = `90%`;
    //         keyDo3.style.width = `6.66%`;
    //         audioDo3.load(); 
    //         break
    //     };
    // }




// function getNumb(event) {
//     console.log(event.code)
// };
// document.addEventListener('keydown', getNumb)


// function getTwoKeys(func, ...codes) {
//     let acc = new Set();
//     document.addEventListener('keydown', function(event) {
//         acc.add(event.code);

//         for (let el of codes) {
//             if (!acc.has(el)) {
//                 return
//             }
//         }

//         acc.clear();

//         func();
//     });

//     document.addEventListener('keyup', function(event) {
//         acc.delete(event.code)
//     })
// }

// getTwoKeys(() => console.log('yes'), 'ShiftLeft', 'KeyA')