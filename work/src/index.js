import { APP_NAME, hello, Figure } from './myutil';
import './style.css'
import pic from './images/sample.jpg'
import xml from './xml/sample.xml'

console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(30, 5));


// css
let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');


// image
window.addEventListener('DOMContentLoaded', function() {
    let img = new Image();
    img.src = pic;
    document.body.appendChild(img);
}, false);


// xml
console.log(xml.data.row[0]);
console.log(xml.data.row[0].$.id);
console.log(xml.data.row[0]._);