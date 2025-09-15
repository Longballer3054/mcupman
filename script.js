// simple responsive menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// contact form validation and friendly success
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const success = document.getElementById('form-success');

    // reset state
    [nameError, emailError, messageError, success].forEach(el => el && (el.hidden = true));

    let valid = true;

    if (!name.value.trim()) { nameError.hidden = false; valid = false; }
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { emailError.hidden = false; valid = false; }
    if (!message.value.trim()) { messageError.hidden = false; valid = false; }

    if (!valid) return;

    // If you want actual email delivery, wire this to a form service
    // For now, show a success message and clear the fields
    success.hidden = false;
    form.reset();
  });
