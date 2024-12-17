export const aboutPage = () => {
    const contentDiv = document.querySelector('#content');

    const aboutTitleDiv = document.createElement('div');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About";

    aboutTitleDiv.appendChild(aboutTitle);
    contentDiv.appendChild(aboutTitleDiv);
};