
(function() {
  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Gallery lightbox using <dialog>
  const dialog = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (dialog && img) {
    document.querySelectorAll('.glight').forEach(btn => {
      btn.addEventListener('click', () => {
        img.src = btn.getAttribute('data-src');
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', (e) => {
      const rect = img.getBoundingClientRect();
      const inImage = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inImage) dialog.close();
    });
  }

  // Contact form: simple mailto fallback
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let valid = true;
      if (!name.value.trim()) { document.getElementById('name-error').hidden = false; valid = false; }
      else document.getElementById('name-error').hidden = true;

      if (!email.value.includes('@')) { document.getElementById('email-error').hidden = false; valid = false; }
      else document.getElementById('email-error').hidden = true;

      if (!message.value.trim()) { document.getElementById('message-error').hidden = false; valid = false; }
      else document.getElementById('message-error').hidden = true;

      if (!valid) return;

      const mailto = `mailto:contact@mcupman.com?subject=Website%20message%20from%20${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value + "\n\nFrom: " + email.value)}`;
      window.location.href = mailto;
      const ok = document.getElementById('form-success');
      if (ok) ok.hidden = false;
      form.reset();
    });
  }
})();
