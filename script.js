// script.js

// Waitlist Form Submission (Basic Simulation)
const form = document.querySelector('#waitlist-form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === '' || !email.includes('@')) {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Thanks for joining the waitlist!';
  message.style.color = 'green';

  // Simulate clearing and logging
  console.log('Email submitted:', email);
  emailInput.value = '';
});

// Scroll Reveal (Optional Animation)
const sections = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
