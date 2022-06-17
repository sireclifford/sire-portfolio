const emailInput = document.querySelector('#user-email');
const form = document.querySelector('#signup');


const destopForm = document.querySelector('#desktopSignup');
const userEmail = document.querySelector('#useremail');

const showErrorMsg = (type) => {
  const error = type==='mobile' ? document.querySelectorAll('small')[0] : document.querySelectorAll('small')[1];
  error.style.color = 'red';
  error.marginTop = '8px';
  error.textContent = 'email address should be in lowercase';
};

const showSuccessMsg = () => {
  const sucess = document.querySelector('small');
  sucess.style.color = 'green';
  sucess.marginTop = '8px';
  sucess.textContent = 'Thank you!';
};


destopForm.addEventListener('submit', (e) => {
  
  const email = userEmail.value.trim();
  const convertedEmail = email.toUpperCase();
  if (email === convertedEmail) {
    showErrorMsg('desktop');
    e.preventDefault();
  } else {
    showSuccessMsg();
  }
});

form.addEventListener('submit', (e) => {

  const email = emailInput.value.trim();
  const convertedEmail = email.toUpperCase();
  if (email === convertedEmail) {
    showErrorMsg('mobile');
    e.preventDefault();
  } else {
    showSuccessMsg();
  }
});
