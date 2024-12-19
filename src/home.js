import pancakePile from './dorayaki-3943941_1280.png';
import syrup from './syrup.png';

export const homepage = () => {
    const contentDiv = document.querySelector('#content');
    const homePageDiv = document.createElement('div');
    homePageDiv.id = 'home';

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
    const step1Para = document.createElement('p');
    step1Para.classList.add('step-text');
    step1Para.textContent = "Whether you're in the mood for buttermilk, chocolate or a seasonal favorite like pumpkin, we've got you covered.";
    const step1Pic = document.createElement('img');
    step1Pic.classList.add('drip');
    step1Pic.src = syrup;
    step1Div.append(step1Heading, step1Para, step1Pic);

    const step2Div = document.createElement('div');
    step2Div.classList.add('step');
    const step2Heading = document.createElement('h3');
    step2Heading.classList.add('step-heading');
    step2Heading.textContent = 'Choose your insides';
    const step2Para = document.createElement('p');
    step2Para.classList.add('step-text');
    step2Para.textContent = 'Blueberries, bacon, raspberries and chocolate chips are just a few of our most popular mix-ins.';
    const step2Pic = document.createElement('img');
    step2Pic.classList.add('drip');
    step2Pic.src = syrup;
    step2Div.append(step2Heading, step2Para, step2Pic);

    const step3Div = document.createElement('div');
    step3Div.classList.add('step');
    const step3Heading = document.createElement('h3');
    step3Heading.classList.add('step-heading');
    step3Heading.textContent = 'Choose your outsides';
    const step3Para = document.createElement('p');
    step3Para.classList.add('step-text');
    step3Para.textContent = "Finish off your custom stack with anything from boysenberry syrup, to fresh strawberries, to rainbow sprinkles. And don't forget a big ol' dollop of our homemade whipped cream!";
    const step3Pic = document.createElement('img');
    step3Pic.classList.add('drip');
    step3Pic.src = syrup;
    step3Div.append(step3Heading, step3Para, step3Pic);

    stepsDiv.append(step1Div, step2Div, step3Div);

    const optionsDiv = document.createElement('div');
    const optionsText = document.createElement('p');
    optionsText.innerHTML = "Pancakes not your thing? Don't worry, we have plenty of other offerings on our full menu.";
    optionsDiv.appendChild(optionsText);

    homePageDiv.append(homePicDiv, subheadingDiv, stepsDiv, optionsDiv);
    contentDiv.appendChild(homePageDiv);
};