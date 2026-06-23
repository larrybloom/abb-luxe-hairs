const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !service) {
    responseMessage.textContent = 'Please fill in your name, email, and selected service.';
    responseMessage.style.color = '#f4cd7d';
    return;
  }

  responseMessage.textContent = `Thanks, ${name}! Your enquiry for ${service} has been received. We'll get back to you soon.`;
  responseMessage.style.color = '#f4f4f4';

  form.reset();
});
