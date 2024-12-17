import './comeau-reset.css';
import './styles.css';
import { homepage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';


const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homeButton.addEventListener('click', handleHomeClick);
menuButton.addEventListener('click', handleMenuClick);
aboutButton.addEventListener('click', handleAboutClick);

function handleHomeClick() {
    contentDiv.textContent = '';
    homepage();
}

function handleMenuClick() {
    contentDiv.textContent = '';
    menuPage();
};

function handleAboutClick() {
    contentDiv.textContent = '';
    aboutPage();
};

homepage();