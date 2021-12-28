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
        Template with music notes
*/

const note = document.createElement('div');
const title = document.createElement('div');
const songNames = document.createElement('div');
const song1 = document.createElement('div');
const song2 = document.createElement('div');
const song3 = document.createElement('div');
const song1Text = document.createElement('div');
const song2Text = document.createElement('div');
const song3Text = document.createElement('div');
const butt = document.createElement('div');
const buttBack = document.createElement('div');
const buttPlay = document.createElement('div');
const song1TextContent = `S  H H  F  D D D  D F / 3 раза`;
const song2TextContent = `G  D D  G  D D  G F D S A    H  K H  G  D D  G F D S A    H  K H  G  D D  G F D S A`;
const song3TextContent = `D  G G G G  H  D  G G G G G  A  H H H H  K J  H G G G G  A  K J K J H J  H G  G J  S D F H G`;
const songObject = {
    'song1': {
        song: song1,
        text: song1Text,
        content: song1TextContent
    }, 
    'song2': {
        song: song2,
        text: song2Text,
        content: song2TextContent
    }, 
    'song3': {
        song: song3,
        text: song3Text,
        content: song3TextContent
    }
};

note.style.cssText = `
    width: 70%;
    height: 40%;
    background-color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
`;

Object.values(songObject).filter(el => {el.song.style.cssText = `font-size: 20px; cursor: pointer; 
                                                                padding-left: 10px; padding-bottom: 5px;`});
Object.values(songObject).filter(el => {el.text.style.cssText = `font-size: 24px; display: none; 
                                                                justify-self: center; align-self: center;padding: 10px;`});
title.style.cssText = `font-size: 24px; padding: 20px`;
butt.style.cssText = `display: none; flex-direction: row; justify-content: end; align-items: end;`;
buttBack.style.cssText = `width: 8%; height: 50%; border: 1px solid black; display: flex; justify-content: center; align-items: center; 
                        cursor: pointer; margin: 1%; justify-self: end; align-self: end;`;
buttPlay.style.cssText = `width: 8%; height: 50%; border: 1px solid black; display: flex; justify-content: center; align-items: center; 
                        cursor: pointer; margin: 1%; justify-self: end; align-self: end;`;
title.textContent = `Просто выбери что понравилось или сочини сам:`;
song1.textContent = `In the end(Linkin park),`;
song2.textContent = `Ёлочка,`;
song3.textContent = `Песенка Мамонтёнка`;
song1Text.textContent = `S..HH..F..DDD..DF / 3 раза`;
song2Text.textContent = `G..DD..G..DD..GFDSA....H..KH..G..DD..GFDSA...H..KH..G..DD..GFDSA`;
song3Text.textContent = `D..GGGG..H..D..GGGGG...A..HHHH.K..J.HGGGG...A..KJKJ.H..J.HG..G.J..SDF..HG`;
buttBack.textContent = `Back`;
buttPlay.textContent = `Play`;

body.append(bodyShadow);
body.append(note);
note.append(title);
note.append(songNames);
songNames.append(song1, song2, song3);
note.append(song1Text, song2Text, song3Text, butt);
butt.append(buttBack, buttPlay);

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
const blackKey = `background-color: black; color: white; border-bottom: solid 0.8rem black; border-left: solid 0.3rem black;
                border-right: solid 0rem black; position: absolute; width: 4%; height: 50%; top: 0; display: flex;
                justify-content: center; align-items: end; transition-duration: 0.05s; font-size: 10px;`;
const key = `width: 90px; height: 90%; border-radius: 5%; border: 1px solid black; display: flex; justify-content: center;
                align-items: end; background-color: white; position: absolute; top: 0px`;


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

piano.style.cssText = `width: 1350px; height: 45%; z-index: 2; display: flex; flex-direction: row; position: relative;`;
let accKey = 0;
Object.values(whiteKeys).filter(el => {
    el.keyCode.style.cssText = `${key}; left: ${accKey}px`;
    accKey += 90;
});

keyDo1.append(`A (До)`);
keyRe1.append(`S (Ре)`);
keyMi1.append(`D (Ми)`);
keyFa1.append(`F (Фа)`);
keySol1.append(`G (Соль)`);
keyLya1.append(`H (Ля)`);
keySi1.append(`J (Си)`);
keyDo2.append(`K (До)`);
keyRe2.append(`L (Ре)`);
keyMi2.append(`: (Ми)`);
keyFa2.append(`" (Фа)`);
keySol2.append(`| (Соль)`);
keyLya2.append(`4 (Ля)`);
keySi2.append(`5 (Си)`);
keyDo3.append(`6 (До)`);

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

blackKeyC1.append(`W (До#)`); 
blackKeyD1.append(`E (Ре#)`);
blackKeyF1.append(`T (Фа#)`);
blackKeyG1.append(`Y (Соль#)`); 
blackKeyA1.append(`U (Ля#)`); 
blackKeyC2.append(`O (До#)`); 
blackKeyD2.append(`P (Ре#)`); 
blackKeyF2.append(`} (Фа#)`); 
blackKeyG2.append(`7 (Соль#)`); 
blackKeyA2.append(`8 (Ля#)`);

body.append(piano);
Object.values(whiteKeys).filter(el => piano.append(el.keyCode))
Object.values(blackKeys).filter(el => piano.append(el.keyCode))


addEventListener('keydown', (event) => {
    forWhite:
    for (let i in whiteKeys) {
        if (i == event.code) {
            whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
            whiteKeys[i].keyCode.style.border = `3px solid black`;
            whiteKeys[i].keyCode.style.height = `91%`; 
            whiteKeys[i].keyCode.style.width = `86px`; 
            whiteKeys[i].audio.play(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (i == event.code) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0rem black`;
            blackKeys[i].keyCode.style.height = `53.5%`; 
            blackKeys[i].audio.play(); 
            break forBlack
        }
    }
})


addEventListener('mousedown', (event) => {
    forWhite:
    for (let i in whiteKeys) {
        if (event.path[0] == whiteKeys[i].keyCode) {
            whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
            whiteKeys[i].keyCode.style.border = `3px solid black`;
            whiteKeys[i].keyCode.style.height = `91%`; 
            whiteKeys[i].keyCode.style.width = `86px`; 
            whiteKeys[i].audio.play(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (event.path[0] == blackKeys[i].keyCode) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0rem black`;
            blackKeys[i].keyCode.style.height = `53.5%`; 
            blackKeys[i].audio.play(); 
            break forBlack
        }
    }
});


addEventListener('keyup', (event) => {

    forWhite:
    for (let i in whiteKeys) {
        if (i == event.code) {
            whiteKeys[i].keyCode.style.backgroundColor = `white`;
            whiteKeys[i].keyCode.style.border = `1px solid black`;
            whiteKeys[i].keyCode.style.height = `90%`; 
            whiteKeys[i].keyCode.style.width = `90px`; 
            whiteKeys[i].audio.load(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (i == event.code) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0.8rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0.3rem black`;
            blackKeys[i].keyCode.style.height = `50%`; 
            blackKeys[i].audio.load(); 
            break forBlack
        }
    }
})


addEventListener('mouseup', (event) => {

    forWhite:
    for (let i in whiteKeys) {
        if (event.path[0] == whiteKeys[i].keyCode) {
            whiteKeys[i].keyCode.style.backgroundColor = `white`;
            whiteKeys[i].keyCode.style.border = `1px solid black`;
            whiteKeys[i].keyCode.style.height = `90%`; 
            whiteKeys[i].keyCode.style.width = `90px`; 
            whiteKeys[i].audio.load(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (event.path[0] == blackKeys[i].keyCode) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0.8rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0.3rem black`;
            blackKeys[i].keyCode.style.height = `50%`; 
            blackKeys[i].audio.load(); 
            break forBlack
        }
    }
})


addEventListener('click', (event) => {
    for (let i in songObject) {
        if (event.path[0] == songObject[i].song) {
            title.style.display = 'none'; 
            songNames.style.display = 'none'; 
            songObject[i].text.style.display = 'flex';
            butt.style.display = 'flex'
        }
    }

    if (event.path[0] == buttBack) {
        title.style.display = 'block'; 
        songNames.style.display = 'block';
        Object.values(songObject).filter(el => el.text.style.display = 'none')
        butt.style.display = 'none'
    }

    if (event.path[0] == buttPlay) {
        if (song1Text.style.display == 'flex') {
            playSong(song1TextContent)
        }
        if (song2Text.style.display == 'flex') {
            playSong(song2TextContent)
        }
        if (song3Text.style.display == 'flex') {
            playSong(song3TextContent)
        }
    }
})


function playSong(song) {
    let acc = song.split(' ');
    let time1 = 0;
    let time2 = 500;

    acc.forEach(item => {
        
        for (let i in whiteKeys) {
            if (item == whiteKeys[i].keyName) {
                setTimeout(() => {
                    whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
                    whiteKeys[i].keyCode.style.border = `3px solid black`;
                    whiteKeys[i].keyCode.style.height = `91%`; 
                    whiteKeys[i].keyCode.style.width = `6.36%`; 
                    whiteKeys[i].audio.play();
    
                    setTimeout(() => {
                        whiteKeys[i].keyCode.style.backgroundColor = `white`;
                        whiteKeys[i].keyCode.style.border = `1px solid black`;
                        whiteKeys[i].keyCode.style.height = `90%`; 
                        whiteKeys[i].keyCode.style.width = `6.66%`; 
                        whiteKeys[i].audio.load();
                    }, `${time2}`)
                }, `${time1}`);
                time1 += 600; 
            }
        }
    })
}
