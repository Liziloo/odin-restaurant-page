import rightArrow from './arrow-right-bold.svg';

const batters = ['buttermilk', 'chocolate', 'strawberry', 'lemon ricotta', 'cinnamon swirl', 'current seasonal'];
const insides = ['bacon', 'chocolate chips', 'blueberries', 'raspberries', 'cinnamon chips', 'peanut butter chips'];
const outsides = ['homemade whipped cream', 'fresh strawberries', 'chocolate chips', 'berry compote', 'applesauce', 'creme brulee sauce', 'rainbow sprinkles', 'Jimmies (chocolate sprinkles)'];
const syrups = ['maple', 'blueberry', 'boysenberry', 'chocolate', 'caramel', 'butterscotch', 'sugar-free maple'];

const other = [];
const sides = [];
const omelettes = [];
const skillets = [];

class Specialty {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    };
};

function addOmelette(name, description) {
    const newOmelette = new Specialty(name, description);
    omelettes.push(newOmelette);
};

function addSkillet(name, description) {
    const newSkillet = new Specialty(name, description);
    skillets.push(newSkillet);
}

addOmelette('Colorado', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat penatibus purus dignissim egestas cubilia feugiat ridiculus.');
addOmelette('California', 'Enim blandit facilisi nisl parturient ex tellus?');
addOmelette('Maine', 'Tempor cursus ex duis commodo per lacus mi fermentum. Ullamcorper parturient imperdiet magna montes hac dictumst.');
addOmelette('Texas', 'Praesent torquent faucibus egestas consequat ipsum lobortis habitant primis a.');
addOmelette('Vermont', 'Inceptos sociosqu dapibus rhoncus elit amet rutrum risus ex nullam.');

addSkillet('France', 'Platea senectus vehicula elit accumsan ornare congue sed litora. Ad imperdiet sit consectetur, libero laoreet magnis.');
addSkillet('Germany', 'Aut vitae sed faucibus platea.');
addSkillet('Spain', 'Finibus etiam nam ac euismod duis.');
addSkillet('Chile', 'Bibendum sodales viverra porta posuere erat sed ad ut.');
addSkillet('Mexico', 'Morbi aliquam elementum proin risus eget, eget venenatis risus hac.');
addSkillet('Thailand', 'Curabitur ornare tempor ex nostra conubia porta. Diam tristique hac pharetra nibh mattis at mattis duis.');
addSkillet('India', 'Id tristique faucibus aliquam aptent, euismod tristique aptent. Fringilla justo feugiat ante litora volutpat donec quam eros blandit.');


class MenuItem {
    constructor(item, price, description = '') {
        this.item = item;
        this.price = price;
        this.description = description;
    }
};

function addItemToMenu(item, price, description) {
    const newItem = new MenuItem(item, price, description);
    other.push(newItem);
};

function addItemToSides(item, price) {
    const newSide = new MenuItem(item, price);
    sides.push(newSide);
};

addItemToSides('One egg', 2);
addItemToSides('bacon', 5);
addItemToSides('sausage', 4);
addItemToSides('goetta', 4);
addItemToSides('toast', 1);
addItemToSides('fresh fruit cup', 4);
addItemToSides('assorted pastries', 5);

addItemToMenu('Texas French Toast', 10, 'Lorem ipsum odor amet, consectetuer adipiscing elit.');
addItemToMenu('Eggs Benny', 15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum tortor, efficitur dapibus viverra ac.');
addItemToMenu('Oatmeal', 5, 'Efficitur posuere suscipit volutpat sapien purus eget.');
addItemToMenu('Yogurt Parfait', 8, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.');
addItemToMenu('Bagel and Lox', 9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus ligula, congue a tempus semper.');

export const menuPage = () => {
    const contentDiv = document.querySelector('#content');
    const menuPageDiv = document.createElement('div');
    menuPageDiv.id = 'menu-page';

    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.id = 'menu-title';
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";
    menuTitleDiv.appendChild(menuTitle);

    const pancakeDiv = document.createElement('div');
    pancakeDiv.id = 'pancakes';
    pancakeDiv.classList.add('menu-item');
    const pancakesTitle = document.createElement('h3');
    pancakesTitle.innerHTML = "Build Your Own Pancake Stack <span>($17)</span>";

    const batterDiv = document.createElement('div');
    batterDiv.id = 'batters';
    const batterTitle = document.createElement('h4');
    batterTitle.textContent = "Batter Options";
    const glutenOption = document.createElement('p');
    glutenOption.textContent = "* All flavors also available gluten-free."
    const batterList = document.createElement('ul');
    batters.forEach ((element) => {
        const batterOption = document.createElement('li');
        batterOption.textContent = element;
        batterList.appendChild(batterOption);
    });
    batterDiv.append(batterTitle, glutenOption, batterList);

    const rightArrowDiv1 = document.createElement('div');
    rightArrowDiv1.classList.add('arrow-div');
    const arrowPic1 = document.createElement('img');
    arrowPic1.classList.add('right-arrow');
    arrowPic1.src = rightArrow;
    rightArrowDiv1.appendChild(arrowPic1);

    const insidesDiv = document.createElement('div');
    insidesDiv.id = 'insides;'
    const insidesTitle = document.createElement('h4');
    insidesTitle.textContent = "Insides Options";
    const insidesList = document.createElement('ul');
    insides.forEach((element) => {
        const insidesOption = document.createElement('li');
        insidesOption.textContent = element;
        insidesList.appendChild(insidesOption);
    });
    insidesDiv.append(insidesTitle, insidesList);

    const rightArrowDiv2 = document.createElement('div');
    rightArrowDiv2.classList.add('arrow-div');
    const arrowPic2 = document.createElement('img');
    arrowPic2.classList.add('right-arrow');
    arrowPic2.src = rightArrow;
    rightArrowDiv2.appendChild(arrowPic2);

    const outsidesDiv = document.createElement('div');
    outsidesDiv.id = 'outsides';
    const outsidesTitle = document.createElement('h4');
    outsidesTitle.textContent = "Outsides Options";
    const outsidesList = document.createElement('ul');
    outsides.forEach((element) => {
        const outsidesOption = document.createElement('li');
        outsidesOption.textContent = element;
        outsidesList.appendChild(outsidesOption);
    });
    const syrupDiv = document.createElement('div');
    const syrupTitle = document.createElement('h5');
    syrupTitle.textContent = 'Syrups';
    const syrupList = document.createElement('ul');
    syrups.forEach((element) => {
        const syrupOption = document.createElement('li');
        syrupOption.textContent = element;
        syrupList.appendChild(syrupOption);
    });
    syrupDiv.append(syrupTitle, syrupList);
    outsidesDiv.append(outsidesTitle, outsidesList, syrupDiv);
    
    pancakeDiv.append(pancakesTitle, batterDiv, rightArrowDiv1, insidesDiv, rightArrowDiv2, outsidesDiv);

    const omeletteDiv = document.createElement('div');
    omeletteDiv.id = 'omelettes';
    const omeletteTitle = document.createElement('h3');
    omeletteTitle.innerHTML = 'Omelettes <span>($15)</span>';
    const omelettesList = document.createElement('ul');
    omelettes.forEach((element) => {
        const omeletteOption = document.createElement('li');
        const omeletteName = document.createElement('h6');
        omeletteName.textContent = element.name;
        const omeletteDescription = document.createElement('p');
        omeletteDescription.textContent = element.description;
        omeletteOption.append(omeletteName, omeletteDescription);
        omelettesList.appendChild(omeletteOption);
    })
    omeletteDiv.append(omeletteTitle, omelettesList);

    const skilletDiv = document.createElement('div');
    skilletDiv.id = 'skillets';
    const skilletTitle = document.createElement('h3');
    skilletTitle.innerHTML = "Skillets <span>($13)</span>";
    const skilletList = document.createElement('ul');
    skillets.forEach((element) => {
        const skilletOption = document.createElement('li');
        const skilletName = document.createElement('h6');
        skilletName.textContent = element.name;
        const skilletDescription = document.createElement('p');
        skilletDescription.textContent = element.description;
        skilletOption.append(skilletName, skilletDescription);
        skilletList.appendChild(skilletOption);
    });
    skilletDiv.append(skilletTitle, skilletList);

    const moreDiv = document.createElement('div');
    moreDiv.id = 'more';

    const otherDiv = document.createElement('div');
    otherDiv.id = 'other';
    const otherTitle = document.createElement('h3');
    otherTitle.innerHTML = "Everything Else";
    const otherList = document.createElement('ul');
    other.forEach((element) => {
        const otherOption = document.createElement('li');
        const otherName = document.createElement('h6');
        otherName.innerHTML = `${element.item} <span>${element.price}`;
        const otherDescription = document.createElement('p');
        otherDescription.textContent = element.description;
        otherOption.append(otherName, otherDescription);
        otherList.appendChild(otherOption);
    });
    otherDiv.append(otherTitle, otherList);

    const sidesDiv = document.createElement('div');
    sidesDiv.id = 'sides';
    const sidesTitle = document.createElement('h3');
    sidesTitle.innerHTML = "Sides";
    const sidesList = document.createElement('ul');
    sides.forEach((element) => {
        const sideOption = document.createElement('li');
        sideOption.innerHTML = `${element.item} &mdash; <span>$${element.price}</span>`;
        sidesList.appendChild(sideOption);
    });
    sidesDiv.append(sidesTitle, sidesList);

    moreDiv.append(otherDiv, sidesDiv);

    menuPageDiv.append(menuTitleDiv, pancakeDiv, omeletteDiv, skilletDiv, moreDiv);

    contentDiv.appendChild(menuPageDiv);
};