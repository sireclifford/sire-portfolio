const modal = document.getElementById('myModal');
const btn = document.querySelector('#hamburger-icon');
const span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
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