import { APP_NAME, hello, Figure } from './myutil';
import './style.css'

console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(30, 5));

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');
