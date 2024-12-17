export const menuPage = () => {
    const contentDiv = document.querySelector('#content');

    const menuTitleDiv = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";

    menuTitleDiv.appendChild(menuTitle);
    contentDiv.appendChild(menuTitleDiv);
};