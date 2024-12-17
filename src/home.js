export const homepage = () => {
    const contentDiv = document.querySelector('#content');

    const homeTitleDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Finnick's Pancake Factory";

    homeTitleDiv.appendChild(homeTitle);
    contentDiv.appendChild(homeTitleDiv);
};