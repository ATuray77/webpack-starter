// import { readFile } from "node:fs/promises";
// import fsPromises from "node:fs/promises";

// Correct import for Node.js 10.0.0 and later
//const { promises: fsPromises } = require('fs');
//const promises = require('fs');

import './css/style.css';
import Modal from './components/Modal'; //bringing in Modal
import IdeaForm from './components/IdeaForm';//bringing in IdeaForm 
import '@fortawesome/fontawesome-free/css/all.css'


const modal = new Modal(); //instantiating the modal class

const ideaForm = new IdeaForm(); //instantiating IdeaForm class
ideaForm.render();//calling render() on the ideaForm


