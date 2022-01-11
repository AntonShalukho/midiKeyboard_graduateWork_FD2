import { root4 } from './piano.js'

const main = document.querySelector('body');

const root1 = document.createElement('div');
root1.setAttribute('id', 'root1');
const root2 = document.createElement('div');
root2.setAttribute('id', 'root2');
const root3 = document.createElement('div');
root3.setAttribute('id', 'root3');
// const root4 = document.createElement('div');
// root4.setAttribute('id', 'root4');


main.append(root1, root2, root3)

export { main }