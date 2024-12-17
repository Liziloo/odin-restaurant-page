import pancakePile from './dorayaki-3943941_1280.png';

export const homepage = () => {
    const contentDiv = document.querySelector('#content');

    const homeTitleDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Finnick's Pancake Factory";
    homeTitleDiv.appendChild(homeTitle);

    const homePicDiv = document.createElement('div');
    const homePic = document.createElement('img');
    homePic.id = 'pancake-pile';
    homePic.src = pancakePile;
    homePicDiv.appendChild(homePic);

    const subheadingDiv = document.createElement('div');
    const subheading = document.createElement('h2');
    subheading.textContent = 'How It Works';
    subheadingDiv.appendChild(subheading);

    const stepsDiv = document.createElement('div');
    stepsDiv.classList.add('steps');

    const step1Div = document.createElement('div');
    step1Div.classList.add('step');
    const step1Heading = document.createElement('h3');
    step1Heading.classList.add('step-heading');
    step1Heading.textContent = 'Choose your batter';
    step1Div.appendChild(step1Heading);

    stepsDiv.append(step1Div);

    contentDiv.append(homeTitleDiv, homePicDiv, subheadingDiv, stepsDiv);
};