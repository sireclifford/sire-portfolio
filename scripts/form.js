const emailInput = document.querySelector('#user-email');
const form = document.querySelector('#signup');

const showErrorMsg = (input, message) => {
  const error = document.querySelector('small');
  error.style.color = 'red';
  error.marginTop = '8px';
  error.textContent = message;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const convertedEmail = email.toUpperCase();
  if (email === convertedEmail) {
    showErrorMsg(emailInput, 'email address should be in lowercase');
  } else {
    form.submit();
  }
});
