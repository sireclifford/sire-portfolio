const modal = document.getElementById('myModal');
const btn = document.querySelector('#hamburger-icon');
const span = document.getElementsByClassName('close')[0];
btn.onclick = () => {
  modal.style.display = 'block';
};
span.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

const singleProjectModal = document.getElementById('single-project-modal');
const singleProjectBtn = document.querySelector('.single-project-btn');
singleProjectBtn.addEventListener('click', () => {
  singleProjectModal.style.display = 'block';
});

window.onclick = (event) => {
  if (event.target === modal) {
    singleProjectModal.style.display = 'none';
  }
};

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