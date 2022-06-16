
const loadRecentWork = () => {
  // define media queries
  const mobileMediaQuery = window.matchMedia('(max-width: 600px)')

  const work = document.querySelector('.recent-work-list');
  fetch('./data/recent-works.json')
    .then((response) => response.json())
    .then((data) => {
      const projects = data['RecentWorks'].map((project) =>
        `<div class="work-card">
      <div class="card-header">
        <img src="${project.image}" alt="${project.title}"/>
      </div>
      <div class="card-body">
        <h1>${project.title}</h1>
        <ul>
        ${project.skills.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <a href="#" class="btn-success btn-three ${mobileMediaQuery.matches ? 'single-project-btn' : 'desktp-view-project-btn'}"
          >See Project</a
          single-project-btns
        >
      </div>
    </div>`).join('');
      // create a virtual container
      const range = document.createRange();
      // give it a context
      range.selectNode(work);
      // add the html, this converts the html into a collection of elements
      const fragment = range.createContextualFragment(projects);
      // append the elements to the document
      work.appendChild(fragment);



      // add event listener to each project
      const singleProjectModal = document.querySelector('#single-project-modal');
      const singleProjectBtn = document.querySelectorAll('.single-project-btn');
      singleProjectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          singleProjectModal.style.display = 'block';
        }, true)
      });


      const desktopModal = document.querySelector('.desktop-modal');
      // const body = document.querySelector('body');
      const desktopProjectBtn = document.querySelectorAll('.desktp-view-project-btn');
      desktopProjectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          // body.style.filter = 'blur(8px)';
          desktopModal.style.display = 'flex';

        }, true)
      })



      close.onclick = () => {
        singleProjectModal.style.display = 'none';
      };

      desktopClose.onclick = () => {
        desktopModal.style.display = 'none';
      }


    });
};

loadRecentWork();








const modal = document.querySelector('#myModal');
const btn = document.querySelector('#hamburger-icon');
const span = document.getElementsByClassName('close')[0];
const close = document.getElementsByClassName('close-popup')[0];
const desktopClose = document.getElementsByClassName('desktop-close-popup')[0];

btn.onclick = () => {
  modal.style.display = 'block';
};
span.onclick = () => {
  modal.style.display = 'none';
};

// window.onclick = (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };


// window.onclick = (event) => {
//   if (event.target === modal) {
//     singleProjectModal.style.display = 'none';
//   }
// };

const GotoProjects = () => {
  const projectsLink = document.querySelector('#projects-link');
  projectsLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('recent-works').scrollIntoView();
  });
};
const GotoGettingStarted = () => {
  const gettingStartedLink = document.querySelector('#getting-started-link');
  gettingStartedLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('mobile-contact-me').scrollIntoView();
  });
};
const GotoAbout = () => {
  const aboutLink = document.querySelector('#about-link');
  aboutLink.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('about-me').scrollIntoView();
  });
};



GotoProjects();
GotoGettingStarted();
GotoAbout();