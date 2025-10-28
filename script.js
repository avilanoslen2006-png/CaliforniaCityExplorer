document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const thankYouOverlay = document.getElementById('thankYouOverlay');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const confirmEmail = document.getElementById('confirm_email').value.trim();
      if (!email || !confirmEmail || email !== confirmEmail) {
        alert('Email addresses do not match.');
        return;
      }

      const formData = new FormData(form);
      try {
        await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        thankYouOverlay.style.display = 'flex';

        document.getElementById('continueBtn').onclick = function () {
          thankYouOverlay.style.display = 'none';
        };

      } catch (error) {
        alert('An error occurred. Please try again later.');
      }
    });
  }
});



