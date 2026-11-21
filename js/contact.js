/**
 * Contact Controller Module
 * Handles minimal editorial contact form validation and mailto dispatch.
 */
function handleEditorialSubmit() {
  const nameEl = document.getElementById('inp-name');
  const emailEl = document.getElementById('inp-email');
  const msgEl = document.getElementById('inp-msg');

  if (!nameEl || !emailEl || !msgEl) return;

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const msg = msgEl.value.trim();

  if (!name || !email || !msg) {
    alert('Please enter your name, email, and message.');
    return;
  }

  const mailtoUrl = mailto:ankityadav11005@gmail.com?subject=&body=;
  window.open(mailtoUrl, '_blank');

  nameEl.value = '';
  emailEl.value = '';
  msgEl.value = '';
}

if (typeof window !== 'undefined') {
  window.handleEditorialSubmit = handleEditorialSubmit;
}
