export const aboutPage = () => {
    const contentDiv = document.querySelector('#content');
    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'about-page';

    const aboutTitleDiv = document.createElement('div');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About";
    aboutTitleDiv.appendChild(aboutTitle);

    const storyDiv = document.createElement('div');
    storyDiv.id = 'story';
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    const storyPara = document.createElement('p');
    storyPara.innerHTML = "Amet laoreet libero nostra porttitor fermentum. Dis felis purus congue condimentum eu parturient cubilia laoreet finibus. Feugiat aptent auctor bibendum; mollis nisl inceptos. Urna dolor cursus fames, fusce inceptos turpis praesent blandit nullam. Condimentum eleifend suscipit quam proin nibh ac. Suspendisse pellentesque augue non ultrices fusce rhoncus ac urna. Velit dictumst nascetur himenaeos odio laoreet ut. Sodales mus etiam rutrum sociosqu est nisi ornare."
    storyDiv.append(storyTitle, storyPara);

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = "Contact Us";
    const phoneDiv = document.createElement('div');
    phoneDiv.id = 'phone';
    phoneDiv.textContent = '(555) 555-5555';
    const addressDiv = document.createElement('div');
    addressDiv.id = 'address';
    const street = document.createElement('p');
    street.textContent = '1600 Monster Truck Road';
    const cityState = document.createElement('p');
    cityState.textContent = 'Thunder Hollow, Autoland';
    addressDiv.append(street, cityState);
    const emailDiv = document.createElement('div');
    emailDiv.innerHTML = '<a href="mailto:example@example.com">monsterdriver@finnpancakehouse.com</a>';
    contactDiv.append(contactTitle, phoneDiv, emailDiv, addressDiv);

    aboutDiv.append(aboutTitleDiv, storyDiv, contactDiv);
    contentDiv.appendChild(aboutDiv);
};