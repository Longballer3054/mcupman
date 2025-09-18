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

  // Lightbox
  const dialog = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (dialog && img) {
    document.querySelectorAll('.glight').forEach(btn => {
      btn.addEventListener('click', () => {
        img.src = btn.getAttribute('data-src');
        img.alt = btn.querySelector('img')?.alt || "Photo";
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', (e) => {
      const r = img.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  }

  // Contact form → mailto
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let ok = true;
      const set = (id, show) => document.getElementById(id).hidden = !show;
      if (!name.value.trim()) { set('name-error', true); ok = false; } else set('name-error', false);
      if (!email.value.includes('@')) { set('email-error', true); ok = false; } else set('email-error', false);
      if (!message.value.trim()) { set('message-error', true); ok = false; } else set('message-error', false);
      if (!ok) return;

      const mailto = `mailto:contact@mcupman.com?subject=Website%20message%20from%20${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value + "\\n\\nFrom: " + email.value)}`;
      window.location.href = mailto;
      const success = document.getElementById('form-success');
      if (success) success.hidden = false;
      form.reset();
    });
  }
})();
