const navButtons = document.querySelectorAll('.nav-link');
const btnInicio = document.querySelector('nav button:first-of-type');

navButtons.forEach((button) => {

  button.addEventListener('click', (event) => {

    event.preventDefault();
    
    const targetSection = document.querySelector(button.getAttribute('href'));
        
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

btnInicio.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
