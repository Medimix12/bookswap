const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Validation project inquiry — ' + data.get('topic'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Work email: ' + data.get('email') + '\n' +
    'Area of support: ' + data.get('topic') + '\n\n' +
    'Project overview:\n' + (data.get('message') || '(Not provided)')
  );
  // No recipient address is hard-coded: connect the form to the real business
  // email or a secure form handler before public production deployment.
  const note = document.querySelector('#form-note');
  note.textContent = 'Demo interaction: form details are ready. Add the intended business email address in script.js before enabling email submission.';
  const recipient = ''; // Set to an authorized project inbox before production.
  if (recipient) {
    window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  }
});