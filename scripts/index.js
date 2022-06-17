const portfolioData = [
  {
    id: 1,
    title: 'Uber',
    skills: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'React',
      'Redux',
      'NodeJS',
      'Express',
      'MongoDB',
      'PostgreSQL',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/uber.jpeg',
    source: 'https://github.com/sireclifford/sire-portfolio',
  },
  {
    id: 2,
    title: 'Duolingo',
    skills: [
      'React',
      'NodeJS',
      'Css',
      'PostgreSQL',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/duolingo.webp',
    source: 'https://github.com/sireclifford/sire-portfolio',
  },
  {
    id: 3,
    title: 'Airbnb',
    skills: [
      'React',
      'Ruby on Rails',
      'Css',
      'React',
      'PostgreSQL',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/airbnb.png',
    source: 'https://github.com/sireclifford/sire-portfolio',
  },
  {
    id: 4,
    title: 'TikTok',
    skills: [
      'React',
      'Ruby on Rails',
      'Css',
      'React',
      'PostgreSQL',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/tiktok.webp',
    source: 'https://github.com/sireclifford/sire-portfolio',
  },
  {
    id: 5,
    title: 'Deliveroo',
    skills: [
      'React',
      'Ruby on Rails',
      'Css',
      'React',
      'PostgreSQL',
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/deliveroo.svg',
    source: 'https://github.com/sireclifford/sire-portfolio',
  },

];

const loadRecentWork = () => {
  // define media queries
  const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

  const work = document.querySelector('.recent-work-list');

  const desktopClose = document.getElementsByClassName('desktop-close-popup')[0];

  const projects = portfolioData.map((project) => `<div class="work-card">
      <div class="card-header">
        <img src="${project.image}" alt="${project.title}"/>
      </div>
      <div class="card-body">
        <h1>${project.title}</h1>
        <ul>
        ${project.skills.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <a id="${project.id}" href="#" class="btn-success btn-three ${mobileMediaQuery.matches ? 'single-project-btn' : 'desktp-view-project-btn'}"
          >See Project</a
          single-project-btns
        >
      </div>
    </div>`).join('');

  const range = document.createRange();

  range.selectNode(work);
  const fragment = range.createContextualFragment(projects);
  work.appendChild(fragment);

  // Place scripts here
  

  const desktopModal = document.querySelector('.desktop-modal');

  const desktopProjectBtn = document.querySelectorAll('.desktp-view-project-btn');
  const modalContent = document.querySelectorAll('.desktop-project-modal-content');
  desktopProjectBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const foundProject = portfolioData.filter((x) => String(x.id) === event.target.id);
      document.getElementsByClassName('desktop-single-project-pic')[0].src = foundProject[0].image;
      document.getElementsByClassName('desktop-single-project-pic')[0].alt = foundProject[0].title;
      document.getElementsByClassName('desktop-single-project-title')[1].innerHTML = foundProject[0].title;
      document.getElementsByClassName('desktop-single-project-skills')[0].innerHTML = foundProject[0].skills.map((item) => `<li>${item}</li>`).join('');
      document.getElementsByClassName('desktop-single-project-desc')[0].innerHTML = foundProject[0].description;
      document.getElementsByClassName('project-source')[0].href = foundProject[0].source;
      desktopModal.style.display = 'block';
      modalContent.style.display = 'flex';
    }, true);
  });

  desktopClose.onclick = () => {
    desktopModal.style.display = 'none';
  };
};

loadRecentWork();

const loadActions = () => {
  const modal = document.querySelector('#myModal');
  const btn = document.querySelector('#hamburger-icon');
  const span = document.getElementsByClassName('close')[0];
  const projectsLink = document.querySelector('#projects-link');
  const gettingStartedLink = document.querySelector('#getting-started-link');
  const aboutLink = document.querySelector('#about-link');

  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  },
  true);

  span.addEventListener('click', () => {
    modal.style.display = 'none';
  },
  true);

  projectsLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('recent-works').scrollIntoView();
  });

  gettingStartedLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('mobile-contact-me').scrollIntoView();
  });

  aboutLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('about-me').scrollIntoView();
  });
};

loadActions();
