import { APP_NAME, hello, Figure } from './myutil';
import './style.css'
import pic from './images/sample.jpg'

console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(30, 5));


let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');


window.addEventListener('DOMContentLoaded', function() {
    let img = new Image();
    img.src = pic;
    document.body.appendChild(img);
}, false);