
const submitBtn = document.getElementById('submit-btn');

document.querySelector('form').addEventListener('submit', function (event) {
  // Git inputs values
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const emailAddress = document.getElementById('email-address').value.trim();
  const password = document.getElementById('password').value.trim();
  // Validatation
  let isFirstNameRe = /^[A-Za-z]+$/.test(firstName);
  let isLastNameRee = /^[A-Za-z]+$/.test(lastName);
  let isEmailAddressRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  let isPassword = password.length >= 4;
  if (!isFirstNameRe || !isLastNameRee || !isEmailAddressRe || !isPassword) {
    event.preventDefault();
    if (!isFirstNameRe) showError('.first-name');
    if (!isLastNameRee) showError('.last-name');
    if (!isEmailAddressRe) showError('.email-address');
    if (!isPassword) showError('.password');
  }
});

function showError(selector) {
  const errorSpan = document.querySelector(`.sign-up .form form ${selector} span`);
  errorSpan.style.display = 'block';
  errorSpan.previousElementSibling.style.display = 'block';
  errorSpan.parentElement.style.marginBottom = '20px';
}

