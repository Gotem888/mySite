const DATA = [
    {
      id: 1,
      name: 'Model S',
      img: 'https://i.ibb.co/R3mw7z8/modelS.jpg',
      desc: ''
    },
    {
      id: 2,
      name: 'Model X',
      img: '../img/modelX.jpg',
      desc: ''
    },
    {
      id: 3,
      name: 'Model Roadster',
      img: '../img/Roadster.jpg',
      desc: ''
    },
    {
      id: 4,
      name: 'Model S Plaid',
      img: '../img/ModelSPlaid.jpg',
      desc: ''
    },
    {
      id: 5,
      name: 'Model Semi',
      img: '../img/Semi.png',
      desc: ''
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
    <p class="car__description">${car.desc}</p>
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