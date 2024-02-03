// import { readFile } from "node:fs/promises";
// import fsPromises from "node:fs/promises";

// Correct import for Node.js 10.0.0 and later
//const { promises: fsPromises } = require('fs');
//const promises = require('fs');

import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css'



function open() { //when button is clicked we want the modal to display
   modal.style.display = 'block';
}

function close() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target === modal) { //clicking the dark area of the modal will close it
        close();
    }
}

modalBtn.addEventListener('click', open)//event listener on the modal btn, with the open function
window.addEventListener('click', outsideClick);//clicking outside the modal should close it