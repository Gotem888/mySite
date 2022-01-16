const DATA = [
  {
    id: 1,
    name: 'Model S',
    img: 'https://i.ibb.co/R3mw7z8/modelS.jpg'
  },
  {
    id: 2,
    name: 'Model X',
    img: 'https://i.ibb.co/6DFBPCz/modelX.jpg'
  },
  {
    id: 3,
    name: 'Model Roadster',
    img: 'https://i.ibb.co/4dFkT0t/Roadster.jpg'
  },
  {
    id: 4,
    name: 'Model S Plaid',
    img: 'https://i.ibb.co/ZHK7t75/Model-SPlaid.jpg'
  },
  {
    id: 5,
    name: 'Model Semi',
    img: 'https://i.ibb.co/841ndyw/Semi.png'
  }
];

const aEnt = document.getElementById('aLog');
const wrappEl = document.getElementById('wrap');

aEnt.addEventListener('click', (e) =>{
    aEnt.style.backgroundColor = 'white';
    setTimeout(() => aEnt.style.display = "none", 2000);
    setTimeout(() => wrappEl.style.display = "flex", 2000);
});


const nav = document.querySelector('#nav-list');
const contentWrapper = document.querySelector('#content');

const createNavElement = (name) => {
  const navElement = `
  <li class="nav__element">
    <a class="nav__link" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a> 
  </li>
  `;

  return navElement;
};

const generateNavElements = (data) => {
  let navContent = '';

  data.forEach((car) => {
    navContent += createNavElement(car.name);
  });

  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((car) => {
    if (car.name === searchName) return car;
  });
};

const createContent = (car) => {
  const content = `
  <div class="car">
    <h2 class="car__title">${car.name}</h2>
    <img class="car__image" src="${car.img}" alt="${car.name} avatar" />
  </div>
  `;

  return content;
};

nav.addEventListener('click', (e) => {
  const linkName = e.target.textContent;

  const result = filterData(DATA, linkName);

  contentWrapper.innerHTML = createContent(result[0]);
});

// init
generateNavElements(DATA);